
    module.exports = function(app) {

        app.post('/api/saveBookingDetails', function(req,res) {
            console.log('req.body-------------------',req.body);
            res.json({
                success:'yayy'
            });
        });

        app.post('/api/checkUser', function(req,res) {
            console.log('req.body-------------------',req.body);
            res.json({
                success:'yayy'
            });
        });

        app.get('/api/getHotelList', function(req,res) {
            console.log('req.body-------------------',hotels);
            res.json({
                list: hotels
            });
        });

        app.get('*', function(req, res) {
            console.log('all requests here.......');
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
        
    };