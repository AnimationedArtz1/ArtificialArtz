#!/bin/bash

# ArtificialArtz Website Deployment Script
echo "🚀 Deploying ArtificialArtz Website..."

# Create backup if files exist
if [ -d "/var/www/html" ]; then
    echo "📁 Creating backup of existing files..."
    sudo cp -r /var/www/html /var/www/html_backup_$(date +%Y%m%d_%H%M%S)
fi

# Copy files to web directory
echo "📂 Copying website files..."
sudo cp -r * /var/www/html/

# Set proper permissions
echo "🔒 Setting file permissions..."
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Restart web server
echo "🔄 Restarting web server..."
sudo systemctl restart apache2 2>/dev/null || sudo systemctl restart nginx 2>/dev/null

echo "✅ Deployment complete!"
echo "🌐 Website should be accessible at your domain"
echo ""
echo "⚠️  Remember to:"
echo "   1. Update Hugging Face API key in js/tools.js"
echo "   2. Configure n8n webhook URL in js/pages.js"
echo "   3. Set up SSL certificate for HTTPS"
echo "   4. Point domain DNS to server IP"
echo ""
echo "📞 Support: https://www.fiverr.com/artificialartz"