// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hero, FeaturePriority, Feature, Project, Blogpost, BlogcategoryBlogpost, Blogcategory, CertIssuer, Certificates, CurrentWork, SiteTitle, WorkExperience, Projectcategory } = initSchema(schema);

export {
  Hero,
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