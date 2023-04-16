import axios from  'axios';

export const api = axios.create({
    baseURL: 'https://yzwcficxejzcmglixkpp.supabase.co/rest/v1',
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6d2NmaWN4ZWp6Y21nbGl4a3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzI2NjUsImV4cCI6MTk5Njc0ODY2NX0.BUEgztYxxq2INRrTYlrXWOCKJsX2xH01uy8ryV_GwsE",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6d2NmaWN4ZWp6Y21nbGl4a3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzI2NjUsImV4cCI6MTk5Njc0ODY2NX0.BUEgztYxxq2INRrTYlrXWOCKJsX2xH01uy8ryV_GwsE"
    }
})