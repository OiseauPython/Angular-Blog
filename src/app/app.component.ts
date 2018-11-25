import { Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	pageTitle = "My blog made with Angular !"; //title of the page
	constructor() {}
    
    post = [{  //Creation of the article array
            title : 'First article', 
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed sem ultrices, a scelerisque nisi convallis. Proin scelerisque fermentum est at efficitur. Donec imperdiet orci id efficitur posuere. Etiam faucibus in nisl in tincidunt. Nulla eu luctus sem. Quisque tincidunt finibus sem eu dictum. Praesent vel massa at diam imperdiet efficitur lacinia et justo. Donec porttitor suscipit tellus vel sodales. Praesent lacinia, eros id ultrices feugiat, nibh lorem fringilla neque, at euismod elit mauris ac lacus. Donec non commodo dolor, vel ullamcorper odio. Nullam quis tempor libero. Fusce velit elit, auctor eget ipsum ut, scelerisque aliquam felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;', 
            loveIt : 0,  
            createAt : new Date()
        }, {
            title : 'Second article', 
            content : 'A seconde very cool article : Vivamus laoreet mi eget libero tempus scelerisque. Praesent pulvinar accumsan suscipit. Proin eu cursus est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus aliquet scelerisque lorem, vitae molestie nunc porta ac. Nulla ultrices, dolor in aliquet lobortis, ex sem feugiat erat, vel malesuada mauris quam ac est. Curabitur hendrerit, metus suscipit tincidunt elementum, quam nunc tempor mi, varius dignissim elit quam id mauris. In at luctus urna. Etiam placerat eros tincidunt dui rutrum pulvinar. Donec eu neque non nulla commodo blandit ut et velit. Vivamus felis nibh, tempus ac dui ac, feugiat facilisis arcu. Etiam nunc mauris, tincidunt quis aliquam vitae, consectetur sed dui. Etiam porta ut tellus vitae sodales. Vivamus congue neque at felis suscipit, egestas mattis mauris volutpat. Donec a feugiat ligula. Curabitur semper accumsan orci id cursus.', 
            loveIt: 0, 
            createAt : new Date()
        }, {
            title : 'Yet another one', 
            content : 'Awesome article : Proin massa ipsum, commodo ac tempus in, convallis eget ipsum. Proin in velit sit amet lorem fermentum hendrerit. Praesent viverra nibh vel felis bibendum consectetur. Mauris fringilla libero euismod, dictum massa at, blandit erat. Nulla odio augue, mollis a urna id, elementum fringilla arcu. Aliquam erat volutpat. Proin imperdiet pellentesque sapien, at finibus nibh scelerisque id. Etiam vel augue arcu. Nunc et nulla ut dui cursus condimentum. Phasellus tempor libero nec diam semper, sed congue odio ornare. Duis magna metus, imperdiet eget consectetur id, tristique ac est. Nam elementum diam et velit tempus tempus. Maecenas varius consequat elit eget cursus. Nam vel lacinia odio, suscipit malesuada metus.', 
            loveIt: 0, 
            createAt : new Date()
        }
    ];
}
