// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FeaturePriority, Feature, Project, Blogpost, BlogcategoryBlogpost, Blogcategory, CertIssuer, Certificates, CurrentWork, SiteTitle, WorkExperience, Projectcategory } = initSchema(schema);

export {
  FeaturePriority,
  Feature,
  Project,
  Blogpost,
  BlogcategoryBlogpost,
  Blogcategory,
  CertIssuer,
  Certificates,
  CurrentWork,
  SiteTitle,
  WorkExperience,
  Projectcategory
};