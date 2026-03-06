import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = { 
  matcher: [
    "/AddArticle/:path*", 
    "/ManageArchive/:path*", 
    "/Contact/:path*",
    "/profile/:path*",
    "/api/protected/:path*" 
  ] 
};