// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CertIssuer, Certificates, CurrentWork, FeaturedProject, Project, ProjectcategoryProject, Projectcategory, FeaturedBlog, Blogpost, BlogcategoryBlogpost, Blogcategory, SiteTitle, WorkExperience } = initSchema(schema);

export {
  CertIssuer,
  Certificates,
  CurrentWork,
  FeaturedProject,
  Project,
  ProjectcategoryProject,
  Projectcategory,
  FeaturedBlog,
  Blogpost,
  BlogcategoryBlogpost,
  Blogcategory,
  SiteTitle,
  WorkExperience
};