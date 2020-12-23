/**
 * Created by 1 on 2016/5/16.
 */
var mongoose=require('mongoose');

// classic case
var  caseschema=new mongoose.Schema({
    title:String,
    content:String,
    time:String,
    // 是否置顶
    istop:String,
});

mongoose.model('Case',caseschema);