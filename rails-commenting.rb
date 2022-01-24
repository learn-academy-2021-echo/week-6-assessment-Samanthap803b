# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller is where my methods are going to be storage is the logical center of the application,
# Index is the home page.
class BlogPostsController < ApplicationController
  def index
    # ---2) Post and .all are going to post everything.
    @posts = BlogPost.all
  end

  def show
    # ---3) This is very similar to post but now we have params so now is only going to show one spesific thing with .find.

    @post = BlogPost.find(params[:id])
  end

  # ---4) This method is used to add new information to the app.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Here we create new content and add it to our database. If the information was added correctly
    #  then we are goin to see the post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Edit let us make changes and we need params to know where to make the changes.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) .update is going to change what we edit so we can see it.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)Destroy is going to delete and is going to use params too to know were to go and have the exact data taht we want to destroy.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)by redirecting us means that if we dont have the correct data is always goin to send us to an specific page.

  private
  def blog_post_params
    # ---10)This is going to help us have restriction to some colums that we dont want to edith.
    params.require(:blog_post).permit(:title, :content)
  end
end
