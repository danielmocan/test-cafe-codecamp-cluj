import { Selector, ClientFunction } from "testcafe";
const getCurrentUrl = ClientFunction( () => window.location.href );

fixture `JSHeroes`
  .page("https://jsheroes.io")

test( "Speakers Link", async t => {
    const harry = Selector( "[alt='Harry Roberts']" ); // any valid CSS Selector
  
    await t
          .setTestSpeed( 0.50 ) // it will be to fast to follow :)
          .click( harry );
    const currentUrl = await getCurrentUrl( );
    await t
      .expect( currentUrl ).eql( "https://jsheroes.io/speakers/harry-roberts" );
} );