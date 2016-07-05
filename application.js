

  $(document).ready(function(){
    //creates a global variable for the visitor
    window.streams.users.visitor = [];
    window.users.push('visitor');
  
  // It's a function that loads the 7 most recent tweets onto the divs
    var loadTweets = function(){
      var $body = $('#b');
      $body.html('');

      var $handle = $('#handle');
      $handle.html('');

      var $time = $('#time');
      $time.html('');

     //adds a tweet to the div
     // the count defines which div to add it to
      var appendTweet = function(){
        $body = $('#b' + count);
        var $tweet = $('<div></div>');
        $tweet.text(tweet.message);
        $body.empty();
        $tweet.appendTo($body);
      };

      // adds the handle the left of the div
      var appendHandle = function(){
        var $handlePlaced = $('<div></div>');
        $handle = $('#handle' + count);
        $handlePlaced.text('@' + tweet.user );
        $handle.empty();
        $handlePlaced.appendTo($handle);
      };

      // adds the time-stamp
      var appendTime = function(){
        var $timePlaced = $('<div></div>');
        $time = $('#time' + count);
        $timePlaced.text(moment().fromNow());
        $time.empty();
        $timePlaced.appendTo($time);
      };

      var count = 1;
      var index = streams.home.length - 1;

      while(count <= 7){
        var tweet = streams.home[index];

        appendTweet();
        appendHandle();
        appendTime();
        
        count++;
        index -= 1;
      }
  };
    loadTweets();    

     //Uses the previous function to load the 7 most recent tweets.
    $('button').on('click', function(){
      loadTweets();
    });

    // Allow the visitor to tweet
    var writeNewTweet = function(message){
     
      var $body = $('#bVisitor');
      $body.html('');

      var $handle = $('#handleVisitor');
      $handle.html('');
      
      var $time = $('#timeVisitor');
      $time.html('');    
      
      var $tweet = $('<div></div>');
      $tweet.text(message);
      $tweet.appendTo($body);
         
      var $handlePlaced = $('<div></div>');
      $handlePlaced.text( '@visitor');
      $handlePlaced.appendTo($handle);
     
      var $timePlaced = $('<div></div>');
      $timePlaced.text(moment().fromNow());
      $timePlaced.appendTo($time);

      // places the tweet into the following locations. This lets us see the visitor's timeline
      streams.users.visitor.push({
        created_at: new Date(),
        message: message,
        user: 'visitor'
      });
      
      streams.home.push({
        created_at: new Date(),
        message: message,
        user: 'visitor'
      });  
    };
         
    // finds the form, takes the text from within the text-box and makes it a variable for
    // writeNewTweet.      
    $( "form" ).submit(function( e ) {
       var message = $('#textBox').val();
       writeNewTweet(message);
       e.preventDefault();// prevents the form from it's default action of submitting.    
    });
  
  //Load users tweets into the bottom div      
    var loadUserTweets = function(username){
          
      var userTweets = streams.users[username];
      var $body = $('.boxUser');
      $body.html('');
    
      //iterate through the user tweets and put them on the div
      userTweets.forEach(function(tweet,index){
        var $tweet = $('<div ></div>');
        var date = streams.users[username][index].created_at;

        $tweet.text('@' + username + ' ' + tweet.message + ' ' + moment(date).fromNow());
        $tweet.appendTo($body);
        
      });
    
    };  
      
    $('.background').on('click', '.handle p', function(event){
      var username = $(this).text().slice(1);
      loadUserTweets(username);
      $('.boxUser').get(0).scrollIntoView();
    });         
});
        
      


        
       


       
       

          

          
          
          

          

   
      