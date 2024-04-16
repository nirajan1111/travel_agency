import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema({

  grid_img: {
    type: String,
    required: true
  },
  standard_img: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  grid_title: {
    type: String,
    required: true
  },
  standard_title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },

  comment: {
    type: String,
    required: true
  }
}
,{
    timestamps: true
    
});

const Blog =mongoose.models.Blog|| mongoose.model('Blog', blogSchema);

export default Blog;