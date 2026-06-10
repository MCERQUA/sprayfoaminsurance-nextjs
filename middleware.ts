export { auth as default } from '@clerk/nextjs/server';

export const config = {
  matcher: ['/dashboard(.*)', '/api/dashboard(.*)'],
};
