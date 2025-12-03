# Contact Form Setup Instructions

The contact form sends emails to `ticri2025@gmail.com`. To set this up:

## 1. Create a Gmail App Password

Since you're using `ticri2025@gmail.com`, you need to create an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google," enable 2-Step Verification if not already enabled
4. Once 2-Step Verification is on, go back to Security
5. Under "How you sign in to Google," click "App passwords"
6. Select "Mail" as the app and "Other" as the device
7. Name it "TICRI Contact Form"
8. Click "Generate"
9. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

## 2. Update Environment Variables

Edit the `.env.local` file in the root of the project:

```env
EMAIL_USER=ticri2025@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

Replace `your-16-character-app-password` with the password from step 1 (remove spaces).

## 3. For Cloudflare Pages Deployment

You also need to add these environment variables in Cloudflare:

1. Go to your Cloudflare Pages project
2. Navigate to Settings → Environment variables
3. Add these two variables:
   - `EMAIL_USER` = `ticri2025@gmail.com`
   - `EMAIL_PASSWORD` = `your-16-character-app-password`
4. Save and redeploy

## 4. Test the Form

1. Run the dev server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out the form and submit
4. Check `ticri2025@gmail.com` for the email

## Security Note

The `.env.local` file is already in `.gitignore` and will NOT be committed to GitHub. This keeps your email credentials secure.
