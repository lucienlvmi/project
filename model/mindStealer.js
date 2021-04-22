const mindStealer = require('./scenes')

mindStealer.createScene("intro", 
`AI: Good morning Prisoner 1955. Today would determine your fate. Would you succeed in your mission, the CoHort will release you from prison and you will live as a freeman. Failure to do so would mean being lock in the cell for the rest of your life. 
What would you want to do?`,
[
    { description: `You never know you would be set free and staying for the rest of your life in prison for stealing a loaf of bread? Hah!`, scene: `<a href="http://localhost:3000/scene/accept_mission">accept_mission</a>`},
    { description: `You heard about those missions where prisoners accept the mission and then haven’t been seen since then. You would rather stay in your cell than go into one of those missions.`, 
   scene: `<a href="http://localhost:3000/scene/refuse_mission"> refuse_mission</a>`}
])

mindStealer.createScene("refuse_mission", 
`You refuse the mission. It is better to stay in the jail for the rest of your life than do the mission. You will never see the sun or feel the wind on your face but that is okay, you are still alive.,

Afterwards, two big men entered the room. You thought you are being sent back to your cell. The two men hold you down as an unbearable pain shoot through your brain cells. It feels like your brain is being fried and blood drips out of your ears and eye socket.The neurotransmitter implanted in your brain has been activated and you can no longer have a will of your own. The Cohort now owns you and you will follow its command.

You wanted to run away but you cannot see anything. Both of your hands were grab forcefully and you were dragged out the door. It feels like a lifetime has passed by. Suddenly, you hear a door open and you were shoved inside. The door closes behind you with a loud bang. The Cohort have robbed you of life and you can no longer see nor do anything of your own free will. Is this your fate?  Start the game again and choose wisely.
<a href="http://localhost:3000/scene/intro">restart_game</a>`
)

mindStealer.createScene("accept_mission", 
`Your mission is to collect the brain of German-born theoretical physicist, Albert Einstein. Einstein’s cerebellum and cerebral cortex was kept intact; however, the rest was divided into 240pieces. You have to travel back in time to be able to retrieve the pieces.
AL Solo: There would be clues and hints during your journey to help you with your mission. Remember, you have a neurotransmitter chip embedded in your brain. Failure to succeed on the mission or escaping will turn the transmitter into a time bomb. Success would mean finally being out of the prison.
You have limited time, choose which place to start.

Choose where to go first?`,
[
    { description: `a. Dr. Thomas Harvey`, scene: `<a href="http://localhost:3000/scene/decide_to_visit_Harvey">decide_to_visit_Harvey</a>`},   
    { description: `b. Dr. Marian Diamond in UC Berkeley`, scene: `<a href="http://localhost:3000/scene/decide_to_visit_Diamond">decide_to_visit_Diamond</a>`},
    { description: `c. Dr. Sandra Witelson`, scene: `<a href="http://localhost:3000/scene/decide_to_visit_Witelson">decide_to_visit_Witelson</a>`},
    { description: `d. Dr. Britt Anderson`, scene: `<a href="http://localhost:3000/scene/decide_to_visit_Anderson">decide_to_visit_Anderson</a>`}
])

mindStealer.createScene("decide_to_visit_Diamond", 
`You have to visit Dr. Harvey first before you are able to visit Dr. Diamond. <a href="http://localhost:3000/scene/decide_to_visit_Harvey">visit Dr. Thomas Harvey</a>`
)
mindStealer.createScene("decide_to_visit_Witelson", 
`You have to visit Dr. Harvey first before you are able to visit Dr. Witelson. <a href="http://localhost:3000/scene/decide_to_visit_Harvey">visit Dr. Thomas Harvey</a>`
)
mindStealer.createScene("decide_to_visit_Anderson", 
`You have to visit Dr. Harvey first before you are able to visit Dr. Anderson. <a href="http://localhost:3000/scene/decide_to_visit_Harvey">visit Dr. Thomas Harvey</a>`
)

mindStealer.createScene("decide_to_visit_Harvey", 
`You opted to go first at Dr. Harvey’s home in Wichita, Kansas. You were brief by the AL about Dr. Harvey’s home. It seems that the Doctor was fanatical about Einstein which is the reason he removed the brain without the latter’s consent. There was a rumor that he hides the brain materials in his basement. The Doctor was very cautious and wouldn’t just let anyone inside his home.`, 

[
    { description: `a. Pretend to be a local reporter`, scene: `<a href="http://localhost:3000/scene/pretend_reporter">pretend_reporter</a>`}, 
    { description: `b. Pretend to be a plumber`, scene: `<a href="http://localhost:3000/scene/pretend_plumber">pretend_plumber</a>`}     
])

mindStealer.createScene("pretend_reporter", 
`You knock on the door and introduced yourself as a local reporter from the Daily News. Dr. Harvey look at you up and down and said “I don’t care who you are. Do not come knocking on my door or I will call the police on you.” 
You failed the mission and return back to the Concave empty-handed. You are locked up for the rest of your life.
<a href="http://localhost:3000/scene/intro">restart_game</a>` 
)

mindStealer.createScene("pretend_plumber", 
`I don’t know how to do plumbing but this might help me discover where Einstein’s brain is.
You knock on the door and introduced yourself as the plumber. Dr. Harvey look at you up and down and said “Thank goodness you are here. There is a leak in the basement that needs to get fix.”
Dr. Harvey let you inside the house. 
Dr. Harvey: “Come down the basement and fix it quickly. I have important stuffs that must not get wet or it will all be ruined.”
 “I have to go out for an errand and will be quick about it. Do not touch anything.”
Dr. Harvey left the room reluctantly. It seems he haven’t trusted you yet.
What will you do?`, 
[
    { description: `a. Do not touch anything in the basement. Go upstairs in the kitchen and grab something to eat and wait for the Doctor. He said not to touch anything.`, scene: `<a href="http://localhost:3000/scene/wait_eat">wait_eat</a>`},
    { description: `b. Check if the Doctor is really out and start snooping. You have limited time and he said he have some important stuffs down here.`, scene: `<a href="http://localhost:3000/scene/snoop_around">snoop_around</a>`} 
])

mindStealer.createScene("snoop_around", 
`You went upstairs after hearing the door closing. You don’t think that the brains are in the basement. Afterall, it would need to be preserved and what better way to do so than hiding it in plain sight which means it might be in the Dr.’s fridge. You open the fridge door and look inside. You jump from a squeaky noise. It turns out Doctor Harvey is still home. Dr. Harvey questioned why you opened his fridge, in your panic you told him that you were looking for Einstein’s brain. 

Before you realized it, someone hit your head hard. It turns out that someone else is behind you. As you lay there dizzily looking at the basement ceiling, you can hear a loud cracking noise, is this the end? 

You failed the mission and return back to the Concave empty-handed. You are locked up for the rest of your life.<a href="http://localhost:3000/scene/intro">restart_game</a>` 
)

mindStealer.createScene("wait_eat", 
`You went upstairs after hearing the door closing. You don’t know what is inside the Dr.’s fridge but it’s been awhile since you last ate. You open the fridge door and look inside it. You jump from a squeaky noise. It turns out Doctor Harvey is still home and he is not alone. 

Result: I’m sorry Doctor. I was really hungry. I was hoping you can forgive me. I didn’t touch anything in the basement and was waiting for your instruction. 
Dr. Harvey: I’m sorry I didn’t trusted you. You can eat first and fix the leak in the basement. Let me know if you need anything. (The Doctor finally trusted you. This is your chance to check if Einstein’s brain is in the basement.)
After having your fill of peanut butter and jam, you went downstairs. There was no one else home and its time for you to take a look around. 

What to do first?`,
[
    { description: `a. Read the New Jersey Monthly  `, scene: `<a href="http://localhost:3000/scene/read_newspaper">read_newspaper</a>`},
    { description: `b. Check out the Cardboard box `, scene: `<a href="http://localhost:3000/scene/check_box">check_box</a>`}, 
    { description: `c. Patch up the leak `, scene: `<a href="http://localhost:3000/scene/patch_leak">patch_leak</a>`} 

])

mindStealer.createScene("read_newspaper", 
`You reach for the newspaper and found an article written by a certain Mr. Levy. There, he mentioned that Einstein’s brain is still with Dr. Harvey and the latter put it inside two mason jar and placed it in a cardboard box with the word “Costa Cider" 
What do you want to do next?`,
[
    { description: "b. Check out the Cardboard box ", scene: "check_box"}, 
    { description: "c. Patch up the leak ", scene: "patch_leak"} 

])

mindStealer.createScene("check_box", 
`You open the cardboard box and found the two mason jar containing Einstein's brain!  
Suddenly, the front door opened and Dr. Harvey is back. You have to hurry and get out of the house. 
What do you want to do?`,
[
{ description: "a. Put the two mason jars inside your toolbox and tell Dr. Harvey you don’t have the materials needed to fix the leak and will come back tomorrow. It’s better not to bring the box as it is big and the Dr. might grow suspicious.", scene:"hide_go"},  
{ description: "b. Tell the Doctor that you patch up the leak but would need to come back to make sure everything is okay.", scene: "come_back_tomorrow"} 
])

mindStealer.createScene("patch_leak", 
`Better patch up the leak. This way when the Doctor suddenly comes back, he will not notice anything and will let you stay for awhile. You will lose valuable time but this would allow you to come back several times to search for the brain matters. 

What do you want to do?`,
[
{ description: "a. Put the two mason jars inside your toolbox and tell Dr. Harvey you don’t have the materials needed to fix the leak and will come back tomorrow. It’s better not to bring the box as it is big and the Dr. might grow suspicious.", scene:"hide_go"},  
{ description: "b. Tell the Doctor that you patch up the leak but would need to come back to make sure everything is okay.", scene: "come_back_tomorrow"} 

])
