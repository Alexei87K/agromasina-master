var smartgrid = require('smart-grid');

const options = {
  /* your grid settings here */
  
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1460px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '767px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '575px'
        },
        min: {
            width: '480px',
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }

};
smartgrid('./src/less/', options);