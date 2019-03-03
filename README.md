## React basics for using WordPress

```
npm install
npm start
```

### Setup your WordPress

#### Install WordPress and add this theme  
http://html5blank.com/  
  
#### Install Plugins:  
Classic Editor  
ACF to REST API  
Advanced Custom Fields  
  
  
#### Add this code to function.php

```
// Get featured image to post.
function post_fetured_image_json( $data, $post, $context ) {
    $featured_image_id = $data->data['featured_media']; // get featured image id
    $featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size

    if( $featured_image_url ) {
        $data->data['featured_image_url'] = $featured_image_url[0];
    }
    return $data;
}
add_filter( 'rest_prepare_post', 'post_fetured_image_json', 10, 3 );

// Get ACF fields to post.
function json_api_encode_acf($post) {

    $acf = get_fields($post['ID']);

    if (isset($post)) {
      $post['acf'] = $acf;
    }
    return $post;
}
add_filter('json_prepare_post', 'json_api_encode_acf');
```

### TODO

* Dynamic menu from WordPress?  
https://wordpress.stackexchange.com/questions/209381/get-wp-navigation-menu-from-rest-api-v2  
https://stackoverflow.com/questions/34827981/wordpress-custom-page-template-and-wp-api