// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blogcategory, BlogcategoryBlogpost, Blogpost, Projectcategory, ProjectcategoryProject, Project } = initSchema(schema);

export {
  Blogcategory,
  BlogcategoryBlogpost,
  Blogpost,
  Projectcategory,
  ProjectcategoryProject,
  Project
};