<?php 

namespace App\FoodApp\CPT;

if (!defined('ABSPATH')) {
    die;
}

use StoutLogic\AcfBuilder\FieldsBuilder;

/**
 * Class FA_Invoice
 */
class FA_Invoice
{

    private const CPT_NAME = "invoices";

    public function __construct()
    {
        add_action( 'init', array($this, 'registerCptInvoices'));
        // add_action( 'admin_menu', array($this, 'hideSubmenu'));
        add_action( 'acf/init', array($this, 'acfFieldsInvoices' ));
        // add_action('add_meta_boxes',array($this, 'hewalexDataMetabox'));

    }   
    public function registerCptInvoices()
    {
        $args = array(
            'label' => __('FoodApp', 'food-app'),
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => true,
            'supports' => ['title', 'custom-fields'],
            'has_archive' => false,
            // 'capabilities' => array(
            //     'create_posts' => true,
            // ),
            'rewrite' => [
                'with_front' => false,
                'slug' => self::CPT_NAME
            ],
            'menu_icon' => 'dashicons-media-text'
        );
        register_post_type(self::CPT_NAME, $args);

    
        
    }


    // public function insertPost(){
        
    // }

    public function acfFieldsInvoices()
    {


     $invoice_schema = new FieldsBuilder('invoice_fields');
     $invoice_schema
        ->addText('invoice_id', [
            'label' => 'ID',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        
        ->addText('invoice_rest', [
            'label' => 'Restaurant',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addSelect('invoice_status', [
            'label' => 'STATUS',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => [],
            'wrapper' => [
                'width' => '',
                'class' => '',
                'id' => '',
            ],
            'choices' => ['VERIFIED', 'PENDING', 'ONGOING'],
            'default_value' => ['PENDING'],
            'allow_null' => 0,
            'multiple' => 0,
            'ui' => 0,
            'ajax' => 0,
            'return_format' => 'value',
            'placeholder' => '',
        ])
        ->addText('invoice_date_start', [
            'label' => 'Start date',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_date_end', [
            'label' => 'End date',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_total', [
            'label' => 'Total',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_fees', [
            'label' => 'Fees',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_transfer', [
            'label' => 'Transfer',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_orders', [
            'label' => 'Orders',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addText('invoice_image', [
            'label' => 'Thumbnail',
            'wrapper' => [
                'class' => 'disallow'
            ]
        ])
        ->addFile('invoice_file', [
            'label' => 'Full information',
            'required' => 0,
            'conditional_logic' => [],
            'wrapper' => [
                'width' => '',
                'class' => '',
                'id' => '',
            ],
            'return_format' => 'url',
            'library' => 'all',
            'min_size' => '',
            'max_size' => '',
            'mime_types' => '',
        ])
    
     ->setLocation('post_type', '==', self::CPT_NAME);
       acf_add_local_field_group($invoice_schema->build());

    }
}
