# Syntax

## Components
- rules for where it should be in page: whether it should be in header, body, below a particular div, first or last element on page
- HTML content
- variables to be used on page
- should it be encapsulated or should it inherit css


have all the source stuff in main directory and build in a publish directory
have all the built stuff in root and have source in a source directory
have build in publish dir and source in source dir
have source, preview, & publish directories (as opposed to something clever with source previewing) 

# Ideation:
source/
  | components/
  |   | header.html
  | templates/
  |   | blog-post.html
  | _index.html_
  | _first-post.md_
bake.js
assets/
  | _any assets_
**index.html**
**first-post.html**
_about.html_ (hardcoded)
_audio/_
  | _example.mp3_


with a structure like this, the root of the folder contains the built site. changes in the source/ folder would need to be processed and then replace what's in the root. you could then serve from root/. You could add /source/ to .ignore but you want to track those really.
you may be hosting duplicated content if you host everything here. if you want to use FTP, this makes it harder to just host the built site. could use a --hide-source command to hide source folder. 


# Structure
publish/
  | index.html
  | post.html
source/
  | source/assets/
  | source/components/
  |   | header.html
  |   | footer.html
  | source/templates/
  |   | blog-post.html
  | _index.html_
  | _post.md_
  | _subdirectory/_
bake.js

- **Publish** has your full site ready to be statically hosted anywhere. All md files will be converted to html pages and all components included anywhere on the site will be recursively filled to an arbitrary depth. Everything else will be replicated without modification.
- **Source** is where you work on the site and add your md files.
	- **Assets** is a folder to store your images. This could be used in future for other dynamic content and build scripts such as minifying.
	- **Components** are pieces of html content you can reuse throughout your site. On any other page, include these components. When you build the site, they are replicated into the file that includes it. They can include javascript, css and links to javascript and css. They exist in separate namespace so css and js do not conflict with the page by default. This can be set
	- **Templates** are pages which can accept markdown content. These pages can also use components in them.

- **bake** use node build to compile your source into the publish folder. Future plans include command to build, and then push the publish folder to a branch in git for gh-pages publishing on build
- **bake --preview** use node preview to start a localhost server to view your site as you develop it. it mixes your content on the fly resulting in slower performance than the fully build site but can update content as you make changes without reloading.

## Technical

preview adds js to the pages which links the content dynamically
needs to look through all pages and if they include anything. error handling for improper includes
list of dependencies

preview adds link to js to each document which looks at the page, finds any includes, error handles any improper includes, then goes and gets the content desired. 