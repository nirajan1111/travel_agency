import mongoose from 'mongoose';
const blogSchema = new mongoose.Schema({

  image: {type:String, required: true},
  title: {type: String,required: true},
  paragraph: {type:String, required: true},
}
,{
    timestamps: true
    
});

const Blog =mongoose.models.blog|| mongoose.model('blog', blogSchema);

export default Blog;