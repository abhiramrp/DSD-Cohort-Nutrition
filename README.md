# Full stack app with Nextjs, Express, and PostgreSQL

To run the full stack application, 

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Start Docker and keep the engine running
3. Run 
```console
docker-compose up -d
```
4. Got to localhost to view the web application. 

### Running Full stack without Docker

Run the following commands in two different terminals.
```console
cd backend
npm run dev
```
```console
cd frontend
npm run dev
```

### Websites

Frontend - https://dsd-cohort-nutrition.vercel.app/

Backend - https://dsd-cohort-nutrition-backend.vercel.app/

### Issues

I couldn't set up PostgreSQL. I am getting connection errors. Will fix it tonight with [Supabase](https://supabase.com/). 