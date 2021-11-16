// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FeaturePriority, Feature, Project, ProjectcategoryProject, Projectcategory, Blogpost, BlogcategoryBlogpost, Blogcategory, CertIssuer, Certificates, CurrentWork, SiteTitle, WorkExperience } = initSchema(schema);

export {
  FeaturePriority,
  Feature,
  Project,
  ProjectcategoryProject,
  Projectcategory,
  Blogpost,
  BlogcategoryBlogpost,
  Blogcategory,
  CertIssuer,
  Certificates,
  CurrentWork,
  SiteTitle,
  WorkExperience
};