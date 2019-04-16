var parent = document.querySelectorAll('body');
var images = document.createElement('aside');
var text = document.createElement('article');

Array.from( document.querySelector('body').children ).forEach(function( node, index ) {
  console.log( node.tagName )
  switch ( node.tagName ){
    case 'P':
      text.appendChild( node.cloneNode( true ) );
      break;
    case 'IMG':
      images.appendChild( node.cloneNode() );
      break;
    default:
  }
});

document.querySelector('body').appendChild( images );
document.querySelector('body').appendChild( text );
