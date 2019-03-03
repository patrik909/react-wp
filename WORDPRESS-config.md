Install wordpress with html5blank-stable template

Put this in function.php

/* ------------------------------------ */
/* ---------- REST FUNCTIONS ---------- */
/* ------------------------------------ */

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