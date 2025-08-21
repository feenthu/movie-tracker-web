# Deployment Guide - Railway

This guide will help you set up automatic deployment to Railway using GitHub Actions.

## Prerequisites

1. **Railway Account**: Make sure you have a Railway account
2. **Railway CLI**: Install Railway CLI for local testing (optional)
3. **GitHub Repository**: Repository should be connected to Railway

## Railway Setup

### 1. Create Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `feenthu/movie-tracker-web` repository
4. Railway will automatically detect it as a Next.js project

### 2. Configure Environment Variables

In your Railway project dashboard, add these environment variables:

```bash
NODE_ENV=production
NEXT_PUBLIC_GRAPHQL_URL=https://movie-tracker-api-production.up.railway.app/graphql
```

### 3. Get Railway Tokens for GitHub Actions

You'll need these tokens for automated deployment:

1. **Railway Token**: 
   - Go to Railway Dashboard → Account Settings → Tokens
   - Create a new token and copy it

2. **Service ID**:
   - In your Railway project, go to Settings → General
   - Copy the Service ID

## GitHub Actions Setup

### 1. Add Repository Secrets

In your GitHub repository, go to Settings → Secrets and variables → Actions:

Add these secrets:
- `RAILWAY_TOKEN`: Your Railway token
- `RAILWAY_SERVICE_ID`: Your Railway service ID  
- `NEXT_PUBLIC_GRAPHQL_URL`: Your GraphQL API URL

### 2. Workflow Configuration

The workflow is already configured in `.github/workflows/deploy.yml`. It will:

1. **On Pull Requests**: Run tests, linting, and build validation
2. **On Push to Main**: Run tests + deploy to Railway

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project
railway link

# Deploy
railway up
```

## Deployment Process

1. **Automatic**: Push to `main` branch triggers deployment
2. **Manual**: Use Railway CLI or dashboard deploy button
3. **Preview**: Pull requests create preview deployments (if configured)

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Node environment | Yes |
| `NEXT_PUBLIC_GRAPHQL_URL` | GraphQL API endpoint | Yes |

## Troubleshooting

### Build Failures
- Check that all dependencies install correctly
- Verify environment variables are set
- Review Railway build logs

### Runtime Issues  
- Check Railway application logs
- Verify API connectivity
- Ensure all environment variables are available at runtime

### GitHub Actions Issues
- Verify repository secrets are set correctly
- Check workflow permissions
- Review action logs for detailed error messages

## Post-Deployment

After successful deployment:

1. **Custom Domain** (optional): Configure custom domain in Railway dashboard
2. **SSL Certificate**: Railway provides automatic SSL
3. **Monitoring**: Set up monitoring and alerts in Railway dashboard

Your frontend will be available at: `https://your-app-name.up.railway.app`