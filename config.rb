# # Compass configuration
# See http://compass-style.org/help/tutorials/configuration-reference

require 'sass-css-importer'

# Additional load paths for Sass CSS Importer gem
add_import_path Sass::CssImporter::Importer.new('bower_components')

# ## Application configuration

# The environment mode. Defaults to :production, can also be :development  (Symbol)
environment = :development

# See http://stackoverflow.com/questions/13987010/compass-style-ruby-encoding-error
encoding = 'utf-8'

# The path to the project when running within the web server. Defaults to '/'.  (String)
http_path = '.'

# The directory where the css stylesheets are kept. It is relative to the project_path. Defaults to 'stylesheets'.  (String)
# css_dir = 'dist/style'

# The directory where the sass stylesheets are kept. It is relative to the project_path. Defaults to 'sass'.  (String)
sass_dir = 'app/style'

# The directory where the images are kept. It is relative to the project_path. Defaults to 'images'.  (String)
images_dir = 'app/image'

# The directory where the javascripts are kept. It is relative to the project_path. Defaults to 'javascripts'.  (String)
javascripts_dir = 'app/script'

# The directory where the font files are kept. Standalone projects will default to <css_dir>/fonts. Rails projects will default to 'public/fonts'.  (String)
fonts_dir = 'app/font'

# The output style for the compiled css. One of: :nested, :expanded, :compact, or :compressed.  (Symbol)
output_style = :compressed

# Indicates whether the compass helper functions should generate relative urls from the generated css to assets, or absolute urls using the http path for that asset type.  (Boolean)
relative_assets = true



# ## Other configuration
# Can be :stand_alone or :rails. Defaults to :stand_alone.  (Symbol)
# project_type =


# Not needed in :stand_alone mode where it can be inferred by context. Sets the path to the root of the project.  (String)
# project_path =


# The full path to where css stylesheets are kept. Defaults to <project_path>/<css_dir>.  (String)
# css_path = 'app/style'


# The full http path to stylesheets on the web server. Defaults to http_path + '/' + css_dir.  (String)
# http_stylesheets_path =


# The full path to where sass stylesheets are kept. Defaults to <project_path>/<sass_dir>.  (String)
# sass_path = 'app/style'


# The full path to where images are kept. Defaults to <project_path>/<images_dir>.  (String)
# images_path = 'app/image'


# The full http path to images on the web server. Defaults to http_path + '/' + images_dir.  (String)
# http_images_path =


# The directory where generated images are kept. It is relative to the project_path. Defaults to the value of images_dir.  (String)
# generated_images_dir = 'image'


# The full path to where generated images are kept. Defaults to the value of <project_path>/<generated_images_dir>.  (String)
generated_images_path = 'dist/image'


# The full http path to generated images on the web server. Defaults to http_path + '/' + generated_images_dir.  (String)
# http_generated_images_path =


# The full path to where javascripts are kept. Defaults to <project_path>/<javascripts_dir>.  (String)
# javascripts_path = 'app/script'


# The full http path to javascripts on the web server. Defaults to http_path + '/' + javascripts_dir.  (String)
# http_javascripts_path =


# The full path to where font files are kept. Defaults to <project_path>/<fonts_dir>.  (String)
# fonts_path = 'app/font'


# Other paths on your system from which to import sass files. See the add_import_path function for a simpler approach.  (Array)
additional_import_paths = ['bower_components']


# Set this to true to enable sourcemap output.  (Boolean)
sourcemap = true


# Set this to true to silence deprecation warnings.  (Boolean)
disable_warnings = true


# These options are passed directly to the Sass compiler. For more details on the format of sass options, please read the sass options documentation.  (Hash)
# sass_options =


# Indicates whether line comments should be added to compiled css that says where the selectors were defined. Defaults to false in production mode, true in development mode.  (Boolean)
# line_comments =


# Can be :scss or :sass. Defaults to :scss.  (Symbol)
# preferred_syntax =


# The full http path to font files on the web server.  (String)
# http_fonts_path =


# The relative http path to font files on the web server.  (String)
# http_fonts_dir =


# Defaults to :chunky_png  (Symbol)
# sprite_engine =
