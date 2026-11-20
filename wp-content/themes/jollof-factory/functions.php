<?php
/**
 * Jollof Factory theme functions.
 *
 * @package jollof-factory
 */

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'jollof-factory-style',
		get_parent_theme_file_uri( 'style.css' ),
		array(),
		wp_get_theme()->get( 'Version' )
	);
} );

add_action( 'after_setup_theme', function () {
	add_editor_style( 'style.css' );

	if ( function_exists( 'register_block_style' ) ) {
		register_block_style( 'core/group', array(
			'name'         => 'jollof-card',
			'label'        => 'Neo Card',
		) );
		register_block_style( 'core/group', array(
			'name'         => 'jollof-sticker',
			'label'        => 'Sticker',
		) );
		register_block_style( 'core/heading', array(
			'name'         => 'jollof-ghost',
			'label'        => 'Ghost Number',
		) );
		register_block_style( 'core/paragraph', array(
			'name'         => 'jollof-quote',
			'label'        => 'Marker Quote',
		) );
		register_block_style( 'core/paragraph', array(
			'name'         => 'jollof-lead',
			'label'        => 'Lead (bar)',
		) );
	}
} );
