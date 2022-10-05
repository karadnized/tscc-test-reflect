import "reflect-metadata";

// check if `Reflect.defineMetadata` is a `function`
console.log( 'check ->', typeof Reflect.defineMetadata );

// define a sample target
var target = { name: 'Ross' };

// add metadata to `target` and `target.name`
Reflect.defineMetadata( 'version', 1, target );
Reflect.defineMetadata( 'info', { props: 1 }, target );
Reflect.defineMetadata( 'is', 'string', target, 'name' );

// see the target
console.log( 'target ->', target );

// extract metadata
console.log( 'target(info) ->', Reflect.getMetadata( 
    'info', target
) );
console.log( 'target.name(is) ->', Reflect.getMetadata( 
    'is', target, 'name'
) );

// when metadata is missing
console.log( 'target(missing) ->', Reflect.getMetadata( 
    'missing', target
) );