

  $(document).ready(function(){
    window.streams.users.visitor = [];//creates a global variable for the visitor
  
    var loadTweets = function(){
      // var $body = $('#b');
      // $body.html('');

      // var $handle = $('#handle');
      // $handle.html('');

      // var $time = $('#time');
      // $time.html('');

      var appendTweet = function(){
        var $body = $('.b' + count);
        var $tweet = $('<div></div>');
        $tweet.text(tweet.message);
        $body.empty();
        $tweet.appendTo($body);
      };

      var appendHandle = function(){
        var $handlePlaced = $('<div></div>');
        var $handle = $('.handle' + count);
        $handlePlaced.text('@' + tweet.user );
        $handle.empty();
        $handlePlaced.appendTo($handle);
      };

      var appendTime = function(){
        var $timePlaced = $('<div></div>');
        var $time = $('.time' + count);
        $timePlaced.text(moment().fromNow() );
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
  }
    loadTweets();    

     //Load the last 7 tweets into the available divs
    $('button').on('click', function(){
      loadTweets();
    });

    // Allow the visitor to tweet
    var writeNewTweet = function(message){
     
      var $body = $('.bVisitor');
      $body.html('');

      var $handle = $('.handleVisitor');
      $handle.html('');
      
      var $time = $('.time8');
      $time.empty();    
      
      var $tweet = $('<div></div>');
      $tweet.text(message);
      $tweet.appendTo($body);
         
      var $handlePlaced = $('<div></div>');
      $handlePlaced.text( '@visitor');
      $handlePlaced.appendTo($handle);
     
      var $timePlaced = $('<div></div>');
      $timePlaced.text( moment().fromNow() );
      $timePlaced.appendTo($time);

      //  var appendTime = function(){
      //   var $timePlaced = $('<div></div>');
      //   var $time = $('.time' + count);
      //   $timePlaced.text(moment().fromNow() );
      //   $time.empty();
      //   $timePlaced.appendTo($time);
      // };


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
          
    $( "form" ).submit(function( e ) {
       var message = $('.textBox').val(); 
       writeNewTweet(message);
       if(e.keyCode == 13){
        $('.post').click();
        // $('#textBox').val() = ''
        // $('#bVisitor').get(0).scrollIntoView();
       }
       e.preventDefault();    
    });
  
  //Load users tweets into the bottom div      
    var loadUserTweets = function(username){
          
      var userTweets = streams.users[username];
      var $body = $('.boxUser');
      $body.html('');
    
      //iterate through the user tweets and put the on the div
      userTweets.forEach(function(obj,index){
        var $tweet = $('<div ></div>');
        var date = streams.users[username][index].created_at;

        $tweet.text( '@' + username + ' ' + obj.message + ' ' + moment(date).fromNow());
        $tweet.appendTo($body);
        
      });
    
    };  
      
    $('.background').on('click', '.handle p', function(event){
      var username = $(this).text().slice(1);
      loadUserTweets(username);
      $('.boxUser').get(0).scrollIntoView();
    });         
});
        
      


        
       


       
       

          

          
          
          

          

   
      