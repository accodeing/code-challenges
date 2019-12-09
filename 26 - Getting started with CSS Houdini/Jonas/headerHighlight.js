class Wobble {
  static get contextOptions(){
    return { alpha: true };
  }

  static get inputProperties() { return ['--tick']; }

  paint( context, size, props ){

    let tick = parseFloat(props.get('--tick').toString());
    var counter = 0;
    var increase = Math.PI * 2 / 40;

    context.strokeStyle = `hsla(${ tick % 256 }, 90%, 60%, 1.0)`;
    context.lineWidth = 3;
    context.beginPath();

    for( let i=0; i<size.width; i+=10){
      var y = Math.sin( counter + tick ) / 2 + 0.5;

      context.lineTo( i, size.height - (y * 5) );
      counter += increase * 10;
    }
    context.stroke();
  }
}

registerPaint( 'headerHighlight', Wobble );
