/**
 * Google Apps Script for ArtificialArtz Contact Form
 * 
 * Instructions:
 * 1. Create a new Google Apps Script project
 * 2. Replace the default code with this script
 * 3. Create a Google Sheet and get its ID
 * 4. Replace SHEET_ID below with your actual Sheet ID
 * 5. Deploy as Web App with "Anyone" access
 * 6. Copy the Web App URL to your contact form
 */

// Replace with your Google Sheet ID
const SHEET_ID = '1uuZ0YrD9vAts6ne_yY7iLcQMzsUU9rRwwTG1bZIqrVU';
const SHEET_NAME = 'Contact_Form_Submissions';

function doGet(e) {
  try {
    // Handle GET requests (URL parameters)
    const params = e.parameter;
    
    if (params.test) {
      return ContentService.createTextOutput('Connection test successful!')
        .setMimeType(ContentService.MimeType.TEXT);
    }
    
    if (params.name && params.email && params.message) {
      return processSubmission(params);
    }
    
    return ContentService.createTextOutput('Missing required parameters')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('doGet error:', error);
    return ContentService.createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doPost(e) {
  try {
    // Handle POST requests (form data)
    const params = e.parameter;
    
    if (params.name && params.email && params.message) {
      return processSubmission(params);
    }
    
    return ContentService.createTextOutput('Missing required parameters')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('doPost error:', error);
    return ContentService.createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function processSubmission(params) {
  try {
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID);
    let worksheet = sheet.getSheetByName(SHEET_NAME);
    
    // Create the worksheet if it doesn't exist
    if (!worksheet) {
      worksheet = sheet.insertSheet(SHEET_NAME);
      // Add headers
      worksheet.getRange(1, 1, 1, 5).setValues([
        ['Timestamp', 'Name', 'Email', 'Message', 'Form Timestamp']
      ]);
    }
    
    // Prepare the data
    const timestamp = new Date();
    const name = params.name || '';
    const email = params.email || '';
    const message = params.message || '';
    const formTimestamp = params.timestamp || '';
    
    // Add the data to the sheet
    worksheet.appendRow([timestamp, name, email, message, formTimestamp]);
    
    // Return success response
    return ContentService.createTextOutput('Message sent successfully!')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('processSubmission error:', error);
    return ContentService.createTextOutput('Error processing submission: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * Test function to verify the script works
 * Run this manually in the Apps Script editor
 */
function testScript() {
  const testParams = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  };
  
  const result = processSubmission(testParams);
  console.log('Test result:', result.getContent());
}