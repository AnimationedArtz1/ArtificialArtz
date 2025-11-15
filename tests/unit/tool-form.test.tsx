import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ToolForm } from '@/components/tools/tool-form';
import type { ToolDefinition } from '@/types/tool';

describe('ToolForm', () => {
  const mockTool: ToolDefinition = {
    slug: 'hooks-generator',
    name: 'Test Tool',
    description: 'Test description',
    longDescription: 'Test long description',
    category: 'Content',
    resultLabel: 'Test Result',
    fields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter name',
        required: true,
        maxLength: 50,
      },
      {
        id: 'description',
        label: 'Description',
        type: 'textarea',
        placeholder: 'Enter description',
        required: true,
        maxLength: 200,
      },
      {
        id: 'category',
        label: 'Category',
        type: 'select',
        required: true,
        options: [
          { label: 'Option 1', value: 'opt1' },
          { label: 'Option 2', value: 'opt2' },
        ],
      },
    ],
  };

  it('renders all form fields', () => {
    const onSubmit = jest.fn();
    render(<ToolForm tool={mockTool} onSubmit={onSubmit} />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /generate/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const onSubmit = jest.fn();
    render(<ToolForm tool={mockTool} onSubmit={onSubmit} />);

    const submitButton = screen.getByRole('button', { name: /generate/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data', async () => {
    const onSubmit = jest.fn();
    render(<ToolForm tool={mockTool} onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText('Name');
    const descriptionInput = screen.getByLabelText('Description');
    const categorySelect = screen.getByLabelText('Category');
    const submitButton = screen.getByRole('button', { name: /generate/i });

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(categorySelect, { target: { value: 'opt1' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Test Name',
        description: 'Test Description',
        category: 'opt1',
      });
    });
  });

  it('validates max length', async () => {
    const onSubmit = jest.fn();
    render(<ToolForm tool={mockTool} onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText('Name');
    const descriptionInput = screen.getByLabelText('Description');
    const categorySelect = screen.getByLabelText('Category');
    const longString = 'a'.repeat(51); // Exceeds maxLength of 50

    fireEvent.change(nameInput, { target: { value: longString } });
    fireEvent.change(descriptionInput, { target: { value: 'Valid description' } });
    fireEvent.change(categorySelect, { target: { value: 'opt1' } });
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));

    await waitFor(() => {
      expect(screen.getByText('Name is too long')).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    const onSubmit = jest.fn();
    render(<ToolForm tool={mockTool} onSubmit={onSubmit} loading={true} />);

    expect(screen.getByRole('button', { name: /generating/i })).toBeDisabled();
    expect(screen.getByLabelText('Name')).toBeDisabled();
  });
});
