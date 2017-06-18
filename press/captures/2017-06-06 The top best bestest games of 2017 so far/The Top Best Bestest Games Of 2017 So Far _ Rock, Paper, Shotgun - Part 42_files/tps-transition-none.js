var tps=tps||{};tps.transitions=tps.transitions||{};tps.transitions.none=function(me,previousIndex,index){var $=jQuery;var previousSlide=previousIndex!==null?$(me.slides[previousIndex].content):null;if(previousSlide){previousSlide.detach();}
var slide=$(me.slides[index].content);me.slideContainer.append(slide);if(previousSlide){me.onNewSlide();}
return[];};