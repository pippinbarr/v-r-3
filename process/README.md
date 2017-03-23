# To Dos

### Third-party waters (2017-02-10 14:27:21)

(All prices in USD)

* √ √ lowPolyWater, courtesy of Mollindustria
* √ √ DecentWater, courtesy of Robert Yang
* √ √ OceanWater, courtesty of @isaackarth
* √ √ Fake Water (Tutanhomon) $0.00 [link](https://forum.unity3d.com/threads/free-fake-water-shader.394962/)
* √ √ Water Flow free, $0.00
* √ √ Scrolling, Mirror And Water, $2.50 [CruduxCruo, Simple Water, 2016]
* √ √ [Golden Zebra Software, Water+ Lite, 2015] (had serious problems with lighting, but seem to be resolved) Water+ Lite (mobile-ready), $2.95
* √ √ Water Flow (G. E. TeamDev) 2017, $3
* √ √ Hard Water (UtopiaWorx) 2016, $4.99
* √ √ Animated Water Texture, $5
* √ √ WaterLite, KennuX, $5
* √ √ AQUAS Water LITE (Dogmatic), $5
* √ √ Low Poly Water (Jolix), $7 [Rates well]
* √ √ Cartoon Water Shaders (Ciconia Studio), 2016 $7.99
* √ √ Water and Caustic Shaders (Ciconia Studio), $7.99
* √ √ Minimalistic Water Shaders, $9.99
* √ √ Water Shader, Rain GS, $10
* √ √ BestWater, $10
* √ √ Stylized Water Shader (Jonathan3D), $10, looks impressive, quite a bit of variety...
* √ √ Water Shader - Manga Style (Kienzan 3D), $10,
* √ √ Water Shader Pack (Martin Reintges), $10
* √ √ Easy Water (Grespon), $20
* √ √ Mobile Water (Polyester Studio), $20
* √ √ Procedure Water (TI Games), $22.95
* x (Cannot for the life of me get this to work, even though it's super amazing in demo. Requested refund. The guy is trying to help me. Maybe it's okay if it's super seethrough??? Might need a double-walled plinth custom made for it. Huh.) Realistic Water (kripto289), $35 xxx (Troublesome, might work)

* x (Skipping for now as it's too simlar to Water Flow) Cartoon Water (Stefan M.), $5
* x (will reconsider at end for comparison with Water+ Lite. But actually it only functions as an upgrade to the Lite, so I don't think it will make sense unfortunately...) Water+ (Golden Zebra Software), $7.95
* x (Interesting because it has interactivity, but that's not something I can show) Toon Water, $7.95
* xxx (Doesn't fucking work. Trying to fucking get a fucking refund. Then I got it fucking working in the end? So okay. They helped out.) Water for unity (Magic Water) (HelicalStudio), $10 (also called Magic Water which is funny)

24 waters, 1 free, total of $215.31 (USD presumably?)

## Technical to dos

* ~~Create title screen with water effect and basic fading~~
* ~~Fix weird doorway problems with the player not being always able to walk through~~
* ~~Block the windows so that you can't walk through them~~
* ~~UV Map the plinths~~
* ~~Make a new plinth with a smaller didact (just unextrude since it was a good size before?)~~
* ~~Redo the 3rd party gallery with the new plinth and working waters~~
* ~~Redo the Unity gallery with the new plinth and better didacts~~
* ~~**SO MANY NIGHTMARES ALONG THE WAY** Buy and add more 3rd party step by step...~~
* ~~**I AM SETTLING ON NO** Consider adding a sea (Water4) around the overall landscape?~~
* ~~Add free third-party water and see how hard installation turns out to be~~
* ~~**DON'T RENDER AT SET DISTANCE** Do something about the horrible performance with all 24 waters~~
* ~~Add all Unity waters to scene and check performance~~
* ~~Finally get the shaders and materials cooperating in a clean version of the gallery scene~~
* ~~**SO DONE** Go insane with water shaders and shader keywords enabled and disable~~
* ~~**SEEMS OKAY?** Set up a full room of 24 plinths and check performance etc.~~
* ~~Reset all Water stuff to complete defaults and don't fuck with them so much~~
* ~~Figure out a way to make and use prefabs such that I can make new plinths and install different waters in them~~
* ~~Actually read about how prefabs work~~
* ~~**DONE AND THEN UNDONE SEVERAL TIMES, EVENTUALLY DONE** Work out what the fuck is wrong with the water's reflections in the plinth~~
* ~~Establish a working didact size and legible labelling approach (images in last resort? :( )~~
* ~~Establish a working plinth~~


## Curation to dos

* ~~Label third-party waters~~
* ~~**ENDED UP WITH PARAMETERS LISTED** Label Unity waters~~
* ~~Choose final set of 24 third-party waters~~
* ~~Choose 24 combinations of unity water pro (this is proving really hard.)~~
* ~~**2 x 24, first building is Unity WaterPro, second building is third-party water** Decide on number of waters to be displayed (notably whether it's just Unity water or whether I look at including third party waters)~~
* ~~**GRID OF CUBE PLINTHS** Work on display technologies (all same-height plinths? Different scales?)~~
* ~~**GRID as per v r 2** Work on show layout in the space
* ~~**NO** Consider divider walls or at least a single wall at entry to display a wall text introducing the exhibition (need to be careful about having a text, though, as I don't want to lay out how to think about what the show "is" for the view I don't think should be self-evident/understandable from the mere existence of the show - the main thing is that it communicates "this is an art show and these objects are worth looking at")~~

## Starter to dos

* ~~Figure out some way of labelling work (whether it's a map at entrance or labels/didacts on the display cases)~~
* ~~Play with colliders to get close enough to actually look at the water~~
* ~~Put water in display case~~
* ~~Create test display case~~
* ~~Add gallery name to building~~
* ~~Repaint building (e.g. change material colours)~~
* ~~Add in v r 2 building and landscape (consider whether landscape needs scaling/changing)~~
* ~~Rename project for millionth time, to new-scene-gallery-water~~
* ~~Create Unity scene for Water show~~

## Thinkings

### "Finishing" (2017-03-16 11:11)

Jesus fucking christ this thing has sucked up a lot of my time. I will say that the lighting looks pretty bloody good this time around (I guess because I left on the Baked GI and it really does look soft and 'natural' which 'teams with the theme' for this project).

Anyway I just shipped off a build to Jim and Mary and also to Dan Solberg since we did an interview about the game a couple of weeks back and he wanted to see it quite reasonably. The build works. I made an okay title screen ... well the title itself is kind of great - shimmer letters underwater. The fades to and from the title and the cut to the game itself are kind of bad. So I'll have to think about that a bit. It needs to be at least semi elegant. I guess I could do the title stuff in the main scene so that you start with the shimmery water and then fade that over to the gameplay, but I'm not sure if I even think that's better? So boring thinking about those elements sometimes... the game just so very much *is* the gallery buildings itself that everything else feels a tiny bit extraneous. And yet the water effect on the title is rather nice and the two previous games had titles so this one probably ought to as well?

Anyway the next thing to make is probably Let's Play: Ancient Greek Punishment: CPU Edition or whatever I'm calling it. Just because that shoooouuuld be easy. But I don't know why I'm writing about that here.

My Git repository of this game is a total piece of shit by the way. I guess what I'll do it try to clean it up a bit and just recommit the single set of source files rather than the history to GitHub so that it's still open source? But then I also wonder whether I maybe shouldn't open source this one given that it has all that proprietary water. I guess I could make a build that just omits all the third party elements completely and it'll be broken, but that way at least people can have the models etc. if they desperately want them without me kind of revealing people's code that I paid for. Yeah that make some sense. Okay good. Okay I'll do that. It doesn't hurt that it's actually easy to do, either. A heh heh heh. And I guess I just keep my local repo of the game itself? It's currently 1.43 GB which is upsetting. I can get it down to about 1GB if I just kill the history of the repo itself and just have the final working build though, so maybe that's not as terrible as it could be?

Anyway, the main thing is that we've hit a sort of milestone and it seems possible this game could be released next week which would be *so nice*. Phew.

### Working away (2017-03-06 17:21:08)

Wrote a decent post about the idea of clear water today which you can see on the blog somewhere, can't be fucked linking it? Oh fine yes I can [here it is](https://www.pippinbarr.com/2017/03/06/beautiful-clear-water/). The basis of that post was about the idea of making peace with water turning out to be clear - because it's transparent water inside a white plinth - why *would* it have a colour in that setting? Which leads to discussions about whether water is meant to look realistic or meant to somehow "feel" realistic. When you think about it in this way, the Unity water almost looks more like oil? The reflective stuff at least. Like, it does NOT look like water would look in the context its in. But even the realistic water that's clear is ridiculous because it's *flowing* inside the plinth which makes no sense. So there's lots of beautiful nonsense going on.

I've reinstalled the entire Unity gallery today including finding a labelling solution that I think is pretty acceptable that lists all the parameters for each water. People who are interested can literally check the changing parameters, people who are slightly less interested will be able to take note of the kinds of parameters involved, and people who are disinterested can just not read them. Everyone wins.

SO, it remains to remake the other gallery in the new scene. Probably with a smaller didact which means I guess using a separate plinth model to keep them separate. Which I will do. Ooh oooh ooooooh.

### Blending in (2017-03-03 10:51:49)

Just managed to make a new plinth in Blender and I feel less like a terrible piece of shit which is nice! Yaaaaay! But seriously that was kind of empowering actually. So it's basically time to rebuild the the 'level' itself and see if I can get everything cooperative.

Another form of "blending in" is the way certain waters are almost invisible when placed in the plinth (ha ha), they BLEND IN (ha ha) it's not actually funny (ha ha) no. BUT this does actually make me think of a solution, which is to leave it the fuck alone? Like, if that's what the water looks like in a plinth then... that's not really my problem actually? That's just what the water actually looks like. It's all part of this tension around whether or not I should personally be responsible for making the water appear like water, or whether the script/shader/material etc. is a "natural substance" that just looks like what it looks like.

Also water is, you know, transparent... like that's just what it looks like... if you're looking down into water, it's hard to see it. So in a way that water is almost the most realistic?! Hah, that would be pretty funny to think of. So I'm starting to think that I'm okay with it. Yep. Yep, okay yep okay yep okay yep okaaaaaaayyyyyy yep.

### Return of the Water King (2017-03-02 11:00:17)

Been quite a while since I actually did work on this thing it looks like. Sorry about that. I'm back in the saddle this morning during the office hours students religiously observe by not coming. I just installed Stylized Water Shader which actually worked like a charm for once. I wonder if there'll be some amazing correspondence between price and how cooperative the shaders/materials/etc. are? That would be nice.

As you might imagine from the downtime I kind of lost my feelings of excitement of the project. Well it says that in the previous entry actually. There does come a point where you're just not learning anything especially interesting from the struggle. There are only so many "this suck, BUT IT'S SO INTERESTING HOW IT SUCKS!" you can pull out of a development process perhaps.

Now I would just like to finish. And there are 18 3rd party waters installed. So that means 6 more. Two of the installed waters (at least) are a bit hairy though, and not necessarily acceptable. One of those should, I think, be mended by a reinstall of the whole show to get the lighting behaving properly again. The other is isaackarth's water which just looks weird in the specific context of a plinth and is managing to look a bit fucked up in general. It miiiight need to be replaced, but I've shown him an image of his water when it's more or less behaving and he was kind of okay with the appearance anyway, so maybe it'll be okay as well.

There are at least six more waters in my potential list. In my dreams I guess I'll just try to get them installed today, do the mega reinstall tomorrow? And then be really suddenly and shockingly close to done? Wouldn't that be nice? Yes it fucking would. We'll see if that pans out. Ah yeah. Aaaaaaah yeah. Aaaaahahahaha yeah.

I can do this right?

...

Just installed Magic Water and it's a terrible piece of work, as I suspected from the page about it on the store. But I wanted it because it's called Magic Water which is funny. But yeah, not so magic. Proprietory script you can't edit, and only maps water into the world as a horizon to horizon effect, which is useless for me. Requested a refund and we'll see how that goes. Part and parcel of the overall experience, though obviously not something I can actually reflect in the game itself sadly.

...

It is becoming apparent that it would be nice if the plinths were deeper because some of the water looks less impressive without depth beneath it to capture some kind of colouring. I don't completely understand why. The problem with this being that it would require manually replacing every single plinth which just sounds like a horrible ball of shit, but I guess I can do it nonetheless? Sad and drawn out sigh.

...

Easy Water went in with merciful ease and does look weirdly luxurious which I kind of enjoy! Expensive at $20.00 for sure. But then that's part of the idea of the show so I just spend the money and move on frankly.

...

Now I'm buying "Mobile Water" for $25 and really, really feeling that "is this worth it?" feeling, which I suppose is a good thing. That sense of trepidation, of relying on the services of somebody. Especially weird when you feel that to a certain extent you're in the same business and could perhaps make something as good or better with enough effort. Kind of a good feeling. A good bad feeling.

Okay but Mobile Water at least behaved itself surprisingly well. And actually it's quite a great example because it's expensive but the reason it's expensive it about efficiency of display on mobile devices (all the way down to iPad 1 apparently). And there's something fantastic about that... especially since this game only runs on desktops. But that idea of paying not for straight up visual appearance but also for the crafting of the underlying code is, I think, quite interesting and worthwhile.

### Trouble every day (2017-02-21 11:48:55)

Sure not finding this game easy to make. Running up against constant roadblocks at multiple levels, whether it's having to edit shaders (as with the Unity water) or running into light problems, scaling problems, materials problems, prefab problems, and on and on with these third-party water. Really quite dispirited with it for the moment, not enjoying the process. Even feel a bit worried about filling the third party gallery as I'm skipping certain waters that just don't feel interesting to me. BUT that said I should probably just go ahead with it anyway.

So yeah, kind of sick of the project. I know at some level it's still a good project - it's not like that can be changed by technical difficulties along the way - but it really sucks sometimes. Not even comparing myself to other people who might well get this stuff done faster and better than me, but just literally not enjoying the struggling.

### More third-party water notes: Courtesy of the Artist (2017-02-19 12:23:16)

The new fun revelation in the third-party water journey has been that after writing a blog post about this aspect of the project ([Third-Party Water](https://www.pippinbarr.com/2017/02/18/third-party-water/)) I received a couple of offers of water from people on Twitter - notably from Paolo Pedercini (Molleindustria), Robert Yang, and @isaackarth. There's something extra great about incorporating these waters into the library... a couple of thoughts:

**Community**. This way of exhibiting water gets at the community aspect of game development and game technology. While I'm either paying for most of the water, getting it through the Unity Asset Store or using a kind of Unity-endorsed water, these are waters "given" to me by people I know (in two cases) or people I'm connected to via social media. It allows me to use "courtesy of the artist" on the didacts which I think is another fun connection to the "real world" of curation, too, a language element to add to the overall spirit of the piece. But yeah, this idea of water as something to be given has a strange resonance, both in terms of art pieces, but even the cultural place of water itself, perhaps, as a kind of gift. I'm not necessarily one for meditating on community/social aspects of game development, but there's clearly something going on here that could be explored.

**Broken water**. This is never not going to be entertaining. All the donated waters were "broken" in funny ways. Paolo's hovered well above the plinth initially until I adjusted some parameters. Robert's is completely blank and just oscillated a plane in the plinth because it has no normal map or cubemap associated with it. @isaackarth's water is completely fucking crazy, so much so that I [made a video of it](https://www.youtube.com/watch?v=2Bdf0jDrhEc&feature=youtu.be) to show him. His water flaps around in the air, circling the plinth. It's kind of beautiful and strange. And reminds me, as have other bugs, that there's clearly a kind of "glitch aesthetics" show to be had. Though I think its strength would have to be something like "default settings" not working or something. It's not that interesting in itself that you can break things if you try?

**Artistic intent**. Now that I have people I know/am connected with giving water, I feel compelled to write back to them and show them how their work looks in the gallery setting, because I want them to have the option of declining to exhibit or to help me make the water behave itself in the new setting. This gets at this idea of the technology not necessarily being design "as water" but rather as water in a specific context - you can't just put it anywhere and expect it to behave itself. But also this idea of the people who make the water as being artists with aesthetic ideas about what their work is meant to look like and feel like. Opens up a kind of second-order artist can of worms.

So once again it's proving a generative time.


### Some third-party water notes (2017-02-16 15:11:56)

So I've spent part of today starting to incorporate third-party waters into the second building, beginning with the only free one and then buying a couple. It has not been an overly smooth experience to be completely honest. Well, that's not true, but there are a couple of categories of thing that have come up...

*Didacts* - the more amusing issue is realising it's kind of hard to know what to write on the didats. This will be true for the Unity stuff too probably (especially since I need to think about parameters). Notably there are issues like what date to put down (do you include the original release date or just the current one that is actually on display?), what the material should be (often it's literally a 'Material' and associated shader). Currently I'm going for 'Material and shader' as that reads quite well, though of course if there's a custom script I should probably be including that as well. And so on. It's a good problem, but a little exhausting?

*Things not working* - more importantly, it certainly hasn't been plug and play. Multiple experiences of accidentally deleting some aspect of a package that it turned out the water needed (notably sky reflections). But more importantly the most recent water has been incredibly hard to scale down. It comes ready by default to serve as a huge, huge plane of water. If you don't *want* a huge plane of water it's not actually very clear how to scale all the numbers associated to make it still look like water at a much smaller scale. I don't feel completely confident I've fixed it though I made good progress by doing a shitload of fiddling. Be nice if there were some help. Maybe I can ask the people who made it.

So a new set of problems. I'm dreading the moment when two waters generate some kind of conflict, but hopefully that won't (can't? ha ha) happen. Nonetheless it's incredibly satisfying, I think, to see how disparate the different waters are so far. A cartoony one, a high gloss reflective one that is totally static, a very complex one (that I've been having the trouble with) that is animated and refractive. So yeah, quite fun, and this is clearly, clearly a great project. So much going on.

Speaking of which, do need to continue to think about how to write about this project and others like it. I think that in some ways I might argue this is a really beautiful and true form of research-creation. It's creation that is very engaged with materials as well as philosophical and other issues around the technology/materials, as well as engaged with questions around curation, art installation, reality/virtuality, and more. It's heady stuff, but I still need a language or a format or... a destination? for writing about it.

There's always that book right? Ha ha.

### Post-Unity Water (2017-02-10 14:26:04)

Finally got a version of the game in working order that has all 24 variations on Unity water in it. The performance is truly fucking awful when you can see multiple plinths, even if you can't actually see the waters themselves, which concerns me. It's kind of interesting/fun, too, though? Like, your physical world is affected by the presence of water... water is not just water... so I have to decide whether to try to fix it or not.

This means I'm ready for third party water, too, which is interesting. See above.

### Water and Parameters (2017-02-06 14:34:50)

Okay so back to the question of how I'm going to select the forms of water for the Unity professional water gallery. How? In terms of the things that can be set:

* Simple: **wave scale**, **wave speed**, **color horizon** [3]
* Reflective: **texture size**, **clip plane**, **wave scale**, **reflect distort**, **wave speed** [5]
* Refractive: **texture size**, **clip plane**, **wave scale**, **refraction color**, **reflect distort**, **refract distort**, **wave speed** [7]

Each one should be clearly shown with its absolute default settings for all parameters. If you then just showed each one like that, plus with a variant along each separate parameter, you'd have 4 + 6 + 8 = 18 different possibilities. Which is a nice number, it would be 6x3 (instead of 8x3). But the numbers don't divide in (e.g. Simple only has 4 possibilities).

So the big question is what the semantics of the layout are? It seems kind of obvious that the layout should aid some kind of comparative understanding of the different possibilities.

Could do: first 3 = defaults. Next 3 = simple water variations. Next 6 = reflective water variations. Next 12 = refractive water variations. Clearly this isn't a clean mapping, though, and it doesn't successfully juxtapose the radically different forms of water with each other at all.

It's true that default + all refractive possibilities = 8. Reflective could be made to roughly correspond through 5 of the 7 variations, but not refract distort and not refract color. Simple can only correspond on three at best, and you're starting to fudge what different parameters mean already by doing that... shit.

Another idea is that there are 8 unique parameters, not shared by all the water types... scale, speed, horizon (only simple), texture size, clip plane, reflect distort, refract distort, refract color. But if you have 8 you'd lose the presentation of defaults which is absolutely key.

So another another idea, then, is to have each column (of 8) definitely be Simple, Reflective, and Refractive, and then each just has 8 variations from default to whatever is possible, including combined versions if needed to make up numbers? And they just don't actually relate to eachother in terms of side by side?

Or... 1st 3 = default. 2nd 3 = scale variant. 3rd 3 = speed variant.

Or... just totally randomise as many variations as are possible in 24 plinths. (Or reduce the number of plinths, that's also acceptable, though I quite like the correspondence to my original game (though it doesn't actually relate to the original Judd anyway!))

1x3 = default. 2x3=scale and speed. (that corresponds all types). Then 3x2=texture, clip, distort (that corresponds reflective and refractive). Yields 12 total that can be matched to some other one. So it's just really not at all possible to have some kind of systematic presentation where there are clear side-by-side comparisons...

But it would be possible to present the first 9 as the three compared across the key values in a block. And then perhaps a gap, and then the next 12 (or 9?) being only comparisons of reflective and refractive across their values, but perhaps with the final row being only refractive? OH MY FUCKING GOD THIS IS ANNOYING.

Jesus. How am I meant to do this? Stupid fucking grids.

Am I better off just demonstrating each water according to ITS possibilties in a group and not going for side by side? In which case you'd have:

* Simple: default, size, speed, horizon (= 4)
* Reflective: default, size, speed, reflect distort, texture, clip (= 6)
* Refractive: default, size, speed, reflect distort, refract distort, texture, clip, refract color (= 8)

Four, six, eight. Nice numbers, nice to meet you. So do I succumb and redesign the space itself to accommodate the apparent numbers game? Do I hedge these numbers a bit given that it might be nice to see combinations of different values? e.g. distort + texture size makes a difference, so does size + distort...

Could I get to 6 9 and 12? Why would I privilege refractive water? I mean, it's the "highest tech" but does that mean it deserves so much more attention?

...

And then at around 2017-02-06 15:17:14 which is a little more precise than necessary, I had the following idea... each row of three has exactly the same material (literlally), but with simple, reflective, and refractive selected on the script.

* 1: default material applied to all.
* 2: wave size
* 3: speed
* 4: reflect distort
* 5: texture size
* 6: clip
* 7: refract distort
* 8: refract color

At each row, it's okay to vary parameters from the default that we've already seen varied in a previous row... so there's a cumulative idea of different combinations as well, but the core idea is three different renderings of a single material. (Major exception here would be the ability to show the Simple 'horizon color', but that's an acceptable loss I think?)

This has the advantage of showing variants of every single parameter, as well as allowing for combinations of parameters that might be interesting, and also showing the limitations of simpler technologies versus more complex technologies. Refractive doesn't just "look better", it has greater possibilities.

OKAY I think this can work. Pitched it to Rilla and she seemed to feel it was acceptable. Key is to make sure that, for instance, Simple looks different in each incarnation, which means combinatorics of speed/size in that case. Even with just 2 and 3 versions of each I get 6 combinations which is almost enough, so not big problem there. That plus one extra and we're good. And similarly for reflective, maintaining those size/speed but adding in some variations of speed, texture, clip, distort. PERFECT.

Okay okay good I'm smart I'm not dumb I'm ok.


### Water and Shaders (2017-02-06 14:28:39)

God I've spen a lot of time with this water bullshit. The problem of last night *seems* to have been solved now which is potentially amazing. I've had so many different issues, though, that I'm not quite willing to believe in it just yet. Still, I changed the underlying Water.cs script a bit by moving away from global Keywords sent to the shader to material-specific shader keywords. The fact that I'm even writing that tells you (me) that I've come quite some way down the technical paths of Unity over the course of this project. Which is undoubtedly a good thing, but it's been one hell of a frustrating experience. As interesting as it is to think about all these weird technical properties of a "natural" substance, it's also just hard.

So anyway it *seems* like it's working, so I'll move back to what I was trying to solve when I discovered the problem in the first place, and maybe it will all just play nice? Haha. Sure.

### Nightmares continue (2017-02-05 18:51:28)

Oh great. Well, I've been testing this further and it turns out that if you can see one of the other water plinths while looking at a water it will often seemingly swap which water you're looking at. E.g. if you are in front of the reflective but can see the plinth with the Simple in it, it will substitute the simple into the reflective water in the plinth. Why? I really do not at all know and it is kind of killing me. Why is this so incredibly stupid?

2017-02-05 20:20:19

Dear god this is an insane problem. I absolutely cannot seem to figure it out. Definitely seems hooked to the script rather than the material, which is probably not surprising. Does duplicating a script make any difference though? Would it help? And would having to duplicate all the scripts for every single thing be ridiculous?

### Parameters (2017-02-05 18:14:06)

So, in terms of the Unity water, what are my selections for the 24 possibilities? It seems fairly clear that I need to have columns of Simple, Reflective, Refractive. Which means I need 8 variations of each one...

* script
  * Disable pixel lights [boring I think, invisible]
  * Texture size [worthwhile, as gives pixelisation/not, no difference for Simple, YES]
  * Clip plane offset [probably worthwhile, changes reflection? But for Simple maybe not? YES]
  * Reflect/refract layers [not really worthwhile]
* material
  * Wave scale [size of waves, definitely YES]
  * Reflection/refraction distory [YES]
  * Refraction color [YES]
  * Fresnel [Less sure... WaterProNighttime alters it...]
  * Normalmap [Not sure...]
  * Wave speed [YES, possibly multiple]
  * Reflective color [Not sure]
  * Simple water color horizon [Only effects Simple...]

So a problem here is that not every variable effects every kind of water, which means that side-by-sides aren't always going to be interesting if we're just controlling for one variable at a time. Won't necessarily be gratifying.

Simple water really only affected by: **wave scale**, normal, **wave speed**, **color horizon**...

Reflective water affected by: **texture size**, **clip plane**, **wave scale**, **reflect distort**, fresnel, normal map, **wave speed**, reflective color

Refractive water affected by: **texture size**, **clip plane**, **wave scale**, **refraction color**, **reflect distort**, **refract distory**, fresnel, normal map, **wave speed**, reflective color

Which would really potentially lend itself to going by rows with more and more sophisticated water as you move toward the back of the room, rather than always having a simple, a reflective, and a refractive? But I kind of wish we had that side by side?

But it would make more sense to do something like 3x Simple at front, 9x Reflective, 12xRefractive? ... hmm!

### Untroubled Water? (2017-02-03 14:31:47)

Have just spent a few minutes playing around in Unity and it seems like the main problem with my weird refraction issues is something around the use of the SketchUp based group/component to assign the water to? Not sure why, but when I just take the standard water prefab and assign a plane to it instead of the planar circle thing it works totally fine and refraction is no problem.

Just need to get my head around the workflow for making sure that I can somewhat easily display different waters now, as at this point it looks like (touch wood or water or whatever) it's possible to have a plinth with water in it behaving properly? That would be nice.

...

Later... I have plinths of water with behaving water and the ability to switch out the material easily without fucking around as well as change the label etc. So it seems kind of ready for production. The unity building should, at the very least, be makeable now. With all the nightmares of the third party waters yet to come! Yaaaaay! Order them by price? Funny. ha ha.

### Water Trouble II (2017-02-02 13:57:59)

Later that day. I've been working away on water stuff today after writing my stuff down. I came to at least *understand* what the issue was with the weird effects while looking at the water, which is that objects being reflected were being *culled* from the view once the camera couldn't see them directly - so they'd suddenly pop out of the reflection at well. Currently I've fixed that by turning the gallery model into a single, unitary model with no components, so that if you can see any piece of it it won't be culled. The game is simple enough that I assume this won't be a hideously costly move.

I did spend a fair while gazing at bits of the Water's scripting trying to figure out how to stop this culling process some other way, but never really understood what I was looking at in enough depth. I was chasing around after occlusion culling, but it actually seems a bit like it's "frustrum culling" that would be the problem, since that refers specifically to the culling of things that the camera cannot see. There's probably just a fucking checkbox somewhere that would fix everything but I don't know if it exists, what it's called, where it is, or anything else, so.

I also discovered and then "solved" (I mean, who knows) another problem while working on this, which was when I realised that if you have multiple instances of a prefab of the water they would all behave the same (when you changed colours etc.) which frightened me since I need variations. But then I realised this was just because they were all using the same material and once I duplicated the material and reassigned it was possible edit individual instances of water. So that one is solved.

A remaining waterbug (ha ha) is that there's a weird colour change effect happening when I view water from really specific angles that I don't understand. So that needs fixing. But I also do need to return to the sadness of the plinths. SIGH.

...

Moments later, I quickly just resized the plinth's didact (and put it vertical again) and the larger size is actually really quite legible, so I think that problem may have ended up being solved as well.

Remaining problems are this colour change bullshit and the issue that I can't seem to put the water on a standard plane (square) instead of on its circular version because it yields really fucked up reflections/refractions I don't understand. Why?

...

Okay well the fucked up reflection thing is something to do with meshes that I 100% don't understand but seem to be able to correct by setting the mesh filter (?) of the water plane to be the basic plane mesh. Uh... whatever that means. Anyway it works. Ça marche.

So next up... stupid fucking colour change AND I noticed a weird square floating around in the reflection (refraction?) as well. Ugh.

...

But later still it seems like pretty much all this stuff is resolved? I was even able to make the plinth go back to being a cube now because the label is properly legible. I discovered some more stuff about the weird fucked up colour thing. Except now it seems like if you stand in a really specific location related to the edge(?) of the water plane it turns into this strange and psychedelic infinite refractions (reflections?) thing, which is bad. But with a collider added to the plinth so you can't walk through it it ... oh shit... (suddenly I'm like... when I add a collider to the gallery will it just make a giant box collider around the whole thing?!)... uhm, anyway, there are no more obvious visual bugs. At least with "this water".

Ah shit.

Well, two things. The colliders bit is totally fine. The gallery still works. But the other thing is that it looks like that weird infinite refraction thing still happens from a specific distance so I'm not too sure what to be doing about that sonnyjim.

### Water Trouble (2017-02-02 10:40:51)

So I started to more seriously try to put a plinth with water in it into the gallery space yesterday and it really didn't go as well as I would have liked it to have. I made the plinth in SketchUp, which seemed to go fine, including an attached Didact. Sort of half managed to attach different materials to the plinth and the didact so that I could make the didact emit light etc. to look whiter in the space. All fine.

Then I put it in the space. It was immediately blatantly obvious that the standard cube size was going to be far, far too low to work out, which already bends the idea away from the Judd which I'm not so so happy about? So I had to make the plinth taller. But then when I put a label on the didact it looked like shit to be honest. After playing around for ages I tried angling it 45 degrees. More legible, but already looking like some kind of awkward design.

AND YET this is already telling us something about creating a show in general, and creating a show in a virtual space (to be displayed on a screen) more specifically, which is kind of interesting. You do actually have to think about your display technology, your labelling, legibility. You can't just stick a label on something and assume people can read it, especially in this setting, because they have such little control over the location of their eyes! I guess I could enable crouching to look at a lower label, but that already seems hilariously stupid? Or is it actually kind of funny? But here we can already see weird interactions between the idea of viewer as camera and the need to perform "human like" viewing poses in a gallery setting - the FPS controls and camera are oriented toward shooting things in the space at a distance, not to closely viewing something. In most of those games if you do need to view something closely you pick it up, perhaps, or it displays separately - but that's not how it feels or works in a gallery so that can't be done. In a gallery you might bend toward a label you can't see, or bend over the displayed water to see it more closely, but in my situation all you can do is "zoom in your eyes" which is a weird concept that doesn't really translate. I guess I could literally implement a "bend forward" control, but that's already hilarious fucked.

ALONG WITH THE LABEL I've ended up having huge trouble with the water itself in the short time I've been trying to "install" it in the space. I created a plane and popped it into the plinth and then "put" the water on the plane or however you would describe it - used the material and set the script appropriately. But when I actually look at the water in the game, it appears to be reflecting stuff that simply isn't there in the space and I can't tell why or what is happening. Which is obviously fucking frustrating, but also kind of fascinating. Again, in a gallery space if you need to put water into a depression in a plinth, there will be technical issues (around leakage, say, or evaporation, or other physical properties of the water and the plinth, or the idea of people trying to drink it, or whathaveyou), but here we have completely other technical issues. The water itself is NOT BEHAVING LIKE WATER.

And this is a technical problem to be solved or accepted. One "solution" would be to say "well, the way it displays is just the way it displays" - that is, that what I am literally "showing" is an application of the water shader/material/script to a plane for the player to view. On the other hand, I'd suggest that the actual idea is to try to show something that "looks like water" as best it can - i.e. showing off the water shader etc. to full advantage so that people can contemplate it as it is technically "meant" to be contemplated, rather than in what looks like a broken form. (Though, again, the fact that ou can have "broken water" is, itself, fascinating and worthy of contemplation both by me and by the viewer potentially.) (And, actually, a gallery show of broken things is not a bad idea.)

So it seems like I have to figure out how to fix this labelling problem and this water problem such that I can move ahead with this project. I'm a little afraid the water simply isn't designed to work in small quantities, but hopefully that's not it. The labelling is a big fucking pain, but I'm going to look at simply using larger didacts as a first attempted solution, so long as it doesn't look too cartoonish in the space (because, again, we're trying to deal with "how things are supposed to look" in this particular context, which isn't always the same as how they "want" to look in terms of the technology available. These are, I'm assuming, many of the same problems that "real" game developers constantly face, just in other directions, and with the knowledge that game engines are, more or less, designed to cater to them.

Okay, so onward and upward with the arts.

### Display Technology (2017-01-27 15:45:07)

They said that a bit in reference to the year end show and another show in my meeting today so I believe it to be a reasonable phrase to use about how you display art. Apropos blah blah blah because I'm using technology like digital technology I think I've been working on this document for too long sorry.

So I could have anywhere between, say, 6 and 30 waters to display in this show. In the original use of the space, v r 2, there were... 24 cubes in the space. That's just cubes nicely spaced apart from each other.

Is it too much to recreate that exactly same aesthetic? Cubic plinths with didacts and different forms of water in them? Is that in fact a funny connection? **Do** I want to get cute with display or is it better to simply have a grid like that for this first show, evoking the original game, evoking Judd's ideas about different versions of the same thing in the same volume of space, evoking Judd's formalism, reckoning with a different technology of construction, referring to v r 2's idea of hidden virtual objects by presenting visible virtual objects and questioning their technical nature instead through the repetition of genre and invitation to look at them as art objects?

I mean, I'm talking myself into this pretty fucking successfully I have to admit.

So if we had 24 plinths, am I still going to devote a number of them to Unity's water? Do I remove one row to go to 21 and have one set of 6 which cover Unity's water and one set of 15 which displays other forms of water from the asset store? The idea of free water that "comes with" the technology and is in some sense endorsed explicitly by the engine, versus other versions of water that might be free or cost money, doing ostensibly the same task, but of course not actually doing the same task...

I feel weird about segmenting Unity away, but it maybe makes sense?

And then there's the inevitable... well, I could also have two buildings again, one with Unity water in multiple configurations, and one with paid for water prefabs/shaders in default configurations?

That's getting pretty ambitious obviously but... kind of makes quite a large amount of sense? Oh god it feels a bit ambitious... is it just totally overwhelming to do it this way? Can I afford to have 24 asset store waters? I think it's legit to show multiple waters from a pack if they're making multiple shaders/prefabs available, so that would cut down the overwhelming idea... though I'd want to look at that to make sure it doesn't feel like there's just an overrepresentation of a specific shader pack? The point of the "non unity" collection has to be to point at diversities of naming, purpose, functionality, aesthetics, and price. While the Unity building is there to point to the idea of the parameterisation of water and the idea of a "dominant" or "built-in" form of water.

God I sound so fucking smart. (I know that I don't really.)

OKAY WELL THIS IS ACTUALLY SEEMING LIKE I HAVE TO HAVE TWO BUILDINGS.

### Which Waters? (2017-01-27 14:48:24)

Thinking about the curation issue of "which waters?". So.

#### Unity Water (Basic)

* Unity > Standard Assets > Environment > Water (Basic) > Prefabs > WaterBasicDaytime
* Unity > Standard Assets > Environment > Water (Basic) > Prefabs > WaterBasicNightime

Both the above have the following settings options

* Horizon Color (changes the basic colour of light on the water)
* Wave scale (small means very indistinct, big means lots of waves)
* Reflective color (RGB) fresnel (A) (this is an actual image, unclear I want to mess with it)
* Waves Normalmap (this is an image, unclear I want to mess with it)
* Wave speed (X, Y, Z, W) (As you might image, changes the speeds, quite expressive)
* Render queue and (priority?) (Don't know what this is for really)

#### Unity Water (Pro)

* Unity > Standard Assets > Environment > Water > Water > Prefabs > WaterProDaytime
* Unity > Standard Assets > Environment > Water > Water > Prefabs > WaterProNighttime

Options in script:

* Water mode (simple, reflective, refractive/transparent) (quite beautiful how well this fucking works and all should be seen)
* Disable pixel lights (what is this?)
* Texture size (Seems related to how precisely the reflections turn up?)
* Clip plane offset (seems to relate to how much things get reflected... the higher the less you see things reflected because I guess they're clipped away)
* Reflect layers / Refract layers (can be selective about what is reflected/refracted)

Options in shader(?):

* Wave scale (as above)
* Reflection / refraction distort (how wavy things look through or in the water while it moves)
* Refraction color (guess this is like the colour of the water? Can make it like wine, for example, worth seeing)
* Fresnel and normal map (image)
* Wave speed in X Y Z W
* Reflective colour (image)
* Simple water horizon color (reproducing Basic I assume)

#### Thoughts about this

It's quite likely that the WaterBasic can be or is just reproduced with the Simple setting of WaterPro. Don't forget that in both cases we have day and night versions.

So there is some combinatorics at work here in terms of being able to look at "what water looks like" from the perspective of Unity which is interesting.

At a minimum we have

* Day versus night
* Simple versus Reflective versus Refractive
* Water speeds (possibly you need about three to convey a sense)
* Wave sizes (at least two here)

If you simply went through all of those you'd have 2 x 3 x 3 x 2 == 36 different versions of what to hypothetically show somebody.

(And then there's colour which is hypothetically infinitish)

But obviously water has "semantics" (or at least semiotics? am I sounding clever or confused right now?)... it's not the case that every water "makes sense" as something to show or that every combination of the above could be equally interesting.

For instance you might want to "simply" curate a set of waters that get at both some of the technical differences (notably between day and night, and between simple, reflective, and refractive). And you might style each of those in different ways in terms of wave size, speed, and colour? Which would lead to a minimum of SIX different kinds of water to display. Day+Simple, Day+Reflective, etc.

And I do want to view them as "technical objects" rather than apply a narrative frame or some kind of worlding... it's not the case they ought to mean anything beyond the fact that they are capable off looking a certain way. In which case do I go ahead and find other waters in the asset store? ...

#### Other waters...

* Stylized Water Shader (Jonathan3D), $10, looks impressive, quite a bit of variety...
* Water Shader - Manga Style (Kienzan 3D), $10,
* Water Flow (G. E. TeamDev), $3
* Water for unity (HelicalStudio), $10 (also called Magic Water which is funny)
* Water Shader Pack (Martin Reintges), $10
* Water+ (Golden Zebra Software), $7.95
* Water and Caustic Shaders (Ciconia Studio), $7.99
* Hard Water (UtopiaWorx), $4.99
* Easy Water (Grespon), $20
* Realistic Water (kripto289), $35
* Mobile Water (Polyester Studio), $20
* Cartoon Water (Stefan M.), $5
* AQUAS Water LITE (Dogmatic), $5
* Low Poly Water (Jolix), $5 [Rates well]

(14 waters here = $153.93)

* Free waters...
 * Water Flow free
 * There is literally only ONE free water and it's the free version of a paid water... whoa...

* More paid waters
 * Scrolling, Mirror And Water, $2.50
 * Water+ Lite, $2.95
 * Animated Water Texture, $5
 * WaterLite, KennuX, $5
 * Toon Water, $7.95
 * Cartoon Water Shaders, $7.99
 * Minimalistic Water Shaders, $9.99
 * Water Shader, Rain GS, $10
 * BestWater, $10

(9 more waters for 61.38)

That would be a total of 24 waters for $215.31

I'm going to stop there... there are many, many waters available at highly variable prices. I could easily spent $100-$200 on the show I imagine, which is totally fine from my perspective? I definitely like the principle that it's a "group show" of water shaders/materials/whatevers all of which are literally about producing water in a 3D world. I imagine that I curate for things like:

* Price - fascinating to think of PAYING for these things... buy an expensive one?
* Name - great if they have bold names that play off each other... Realistic Water, Mobile Water, Cartoon Water, ...
* Aesthetics - this is maybe the least important, since I want consideration of aesthetics to come from the viewer who can put it in play with other considerations about the work (like its name, price...)
* Technological sophistication - Good to range from cartoony, to shitty, to realistic, to low poly, to mobile-oriented, etc.?

One dream idea would be to have a survey show of ALL the water in the Unity asset store, but I'm getting the impression from my browsing that that would not be entirely possible... there's just so much and I don't know if that will improve/alter the idea involved except that it has a certain conceptual strength of course. Although skipping through a few pages I'm finding less actual water... maybe it's not an impossible idea...?

Well there are certainly more than, say, 30 different waters so I don't think that's a solution in fact.

Next question for curation is really about the space and how many waters I can reasonably show and in what format.


### 2017-01-27 14:07:12

Well I pushed ahead and managed to install a not-very-good plinth with an inset and I put some water into it and put it in the space and then fiddled with the Player object to try to get it to be possible to stand close to the display and look at the water while also not allowing you to look as though you're floating above it (when you look down and have your back to it) and to not be able to stare inside walls as well due to a low skin-width value. Jesus, fucking physics.

Which leaves me right now in a place where I have the crappiest possible version of what I've been thinking about and now I have to grapple most of all with whether it's good enough, whether the space is good enough, whether there's enough variety in the Unity water or whether I need to buy some water for the show. Whether the show can be laid out nicely. How to display information - kind of want didacts for that but where?

Okay well I popped a didact on my sample plinth with water and got the basics of it going pretty surprisingly easily to be honest. Can quite easily make a prefab for that I suppose? That's my guess anyway. The text is pretty well illegible until you zoom in, but I don't know if I find that too upsetting... doesn't seem to me that you can reasonably expect to read text unless you're at some amazingly high resolution screen etc.? At any rate, it's not a deal breaker and I think the didact approach is the best in terms of gallery-ness.

I think I might have to just build any furniture and display stuff in SketchUp potentially simply because I don't think I can stand learning Blender again for such a small-scale project? It's such a fucking hassle. Although on the other hand I probably should just learn it properly again in case I do a bunch more 3D stuff somehow? But dear god I don't really enjoy it. UUUUGGGGGHHHH. But it's pretty good. But ugh.

Anyway it seems like the next step it making proper plinths (possibly even with built in didacts? Or maybe just build those separately in Unity as a prefab) and thinking about how to lay out the show in the space, which isn't necessarily easy. I think it's okay for the plinths to be larger. Need to decide how many "waters" I want to put on display and whether there's something that should be in a big container down the length of the room for example, which could be kind of nice.

Also it would be nice to have a wall text but there aren't any walls that seem like they can accomodate that? A brochure distributed separately? A webpage? A PDF? All pretty funny options probably.

I guess I could also Build A Wall in the space to support a wall text on entry... that's obviously a possible thing to do, though it might end up making the space itself look kind of ugly potentially. Might be funny to have walls around with quotations about water on them?

There are too many possibilities in some ways. Need to just construct a possibility and then just see how it goes from there I suppose.

### 2017-01-23 15:06:46

Okay so really the big bastard of all this is the question about how to name the gallery itself, because all of these other things are "shows" within the gallery.

* Gallery, Art Gallery, The Gallery, The Barr Gallery
* Art Gallery Game
* Timpani (as in, just some random fucking name)
* The 5020 Gallery (as in, just some random fucking name)
* I have a gallery and you don't gallery
* Hello, Gallery (As in Hello, World)
* Unity, Division
* GameObject, GalleryObject, Gallery GameObject, Empty GameObject, GameObjects
* Scene, **New Scene**
* Empty Child
* 3D Object
* Mesh
* Made in Unity
* ...

Leaning toward New Scene for now, it's does kind of jump out. And it'll make sense with a subtitle, like

*New Scene: Water* and *New Scene: Gallery*

Or should it be *New Scene Gallery*? I suspect it ought to be. Kind of funny play on a "new gallery scene"? In which case we end up with things like:

*New Scene Gallery: Water* and *New Scene Gallery: Gallery*.

The other big question for me at the moment is whether to use the Marfa building as the gallery itself. It has the advantage of already existing which would mean I wouldn't need to do any modelling for the project, which would be a huge fucking relief. On the other hand it's not necessarily an ideal gallery space. On the other hand, that's part of the "appeal" of a gallery space - that it's a pre-existing space much of the time that you don't necessarily control all the dimensions of. I like its warehousiness (evoking the idea of the SketchUp warehouse in a fun way). So I guess the answer is: for now this is the way it's going to be and if it turns out not to work later I'll deal with it then.

So I use the same terrain and building (only one building though unless I happen to need two). I add New Scene Gallery somewhere on the building to indicate it's a gallery. And I'll probably need some sort of "show explanation" somewhere to contextualise things? Or will I use the same kind of display board that I used for v r 2, with a big board outside describing what the things are? That's something to solve in the space.

I think I might want the gallery building itself to be greyscale entirely? And possibly the landscape too. Or some other tones... anyway I don't think I want it to be red. I can "repaint it". Maybe also make some of the internal structures white for that reason, more of a white cube vibe.

Okay so some initial steps are emerging for the project at this point it seems to me. Which is that I need to get the gallery and landscape in. I need to make some display cases to hold the water. And I need to put the water into the display cases. And then I need to consider whether I should use/buy other water forms. And whether the cases need glass over them or not? Probably not.

Starting a gallery involves so many decisions eh? Eh.

### 2017-01-22 11:21:22

This would be part of a larger project of creating gallery displays of assets from various asset stores like Unity and SketchUp. I basically need some kind of a space to place the artworks in and then to find the artworks (and buy them if necessary).

Possibility for the actual gallery space: the artillery shed from *v r 1*. This has potential problems in terms of the connotations of the specific work in Marfa, but then I also like how it refers back to a previous game and thus is, in itself, an asset. Also thought about the idea of finding a pre-made gallery from somewhere else (like SketchUp perhaps) and using that, so the whole thing is entirely sourced from elsewhere. But currently I do like the aesthetics of the *v r 2* space. So maybe I'll go with it for now.

Also worth noting that I think actual first version of this project should plausibly be an actual gallery on display in the gallery. So I find a gallery model and then put that inside my own gallery model.

There are clearly a huge number of possibilities for different shows. But "Gallery" and "Water" are my first two candidates. Why am I calling this Waves then? It really ought to be called Water.

And I really need some kind of title for the overall project I think as well.

* Gallery
* Assets, Asset Gallery, Pippin Barr Gallery
* Model Gallery, Unity Gallery,
* ...
