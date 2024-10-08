const quotes = [
    "Believe in yourself!",
    "Every moment is a fresh beginning.",
    "Success is not final, failure is not fatal.",
    "Don’t wait for opportunity. Create it.",
    "Dream big and dare to fail.",
    "Don't wait for opportunity. Create it.",
"You are capable of amazing things.",
"Success is the sum of small efforts repeated day in and day out.",
"Be the change that you wish to see in the world.",
"Your only limit is your mind.",
"Happiness is not by chance, but by choice.",
"Difficult roads often lead to beautiful destinations.",
"Believe you can and you're halfway there.",
"What we think, we become.",
"Start where you are. Use what you have. Do what you can.",
"The best time to plant a tree was 20 years ago. The second best time is now.",
"Don't stop until you're proud.",
"The harder you work for something, the greater you'll feel when you achieve it.",
"Do what you can, with what you have, where you are.",
"Act as if what you do makes a difference. It does.",
"Success is getting what you want, happiness is wanting what you get.",
"Your time is limited, don't waste it living someone else’s life.",
"The only way to do great work is to love what you do.",
"Be yourself; everyone else is already taken.",
"Success is not how high you have climbed, but how you make a positive difference to the world.",
"The best revenge is massive success.",
"Life is 10% what happens to us and 90% how we react to it.",
"If you want something you've never had, you must be willing to do something you've never done.",
"Your limitation—it’s only your imagination.",
"Sometimes later becomes never. Do it now.",
"Don’t wait. The time will never be just right.",
"Work hard in silence, let your success be your noise.",
"Success is not in what you have, but who you are.",
"Stay positive, work hard, make it happen.",
"A journey of a thousand miles begins with a single step.",
"You don’t have to be perfect to be amazing.",
"It’s never too late to be what you might have been.",
"What lies behind us and what lies before us are tiny matters compared to what lies within us.",
"Great things never come from comfort zones.",
"Do something today that your future self will thank you for.",
"Everything you’ve ever wanted is on the other side of fear.",
"Fall seven times, stand up eight.",
"Life is what happens when you’re busy making other plans.",
"The only limit to our realization of tomorrow is our doubts of today.",
"We may encounter many defeats, but we must not be defeated.",
"It’s not whether you get knocked down, it’s whether you get up.",
"Failure is the opportunity to begin again more intelligently.",
"The future belongs to those who believe in the beauty of their dreams.",
"You are never too old to set another goal or to dream a new dream.",
"Opportunities don't happen, you create them.",
"Life is short, and it is up to you to make it sweet.",
"It’s not the years in your life that count, it’s the life in your years.",
"Your attitude, not your aptitude, will determine your altitude.",
"Small daily improvements over time lead to stunning results.",
"The only way to achieve the impossible is to believe it is possible.",
"Turn your wounds into wisdom.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"Success is how high you bounce when you hit bottom.",
"The best way to predict your future is to create it.",
"Never let the fear of striking out keep you from playing the game.",
"I find that the harder I work, the more luck I seem to have.",
"Don’t let yesterday take up too much of today.",
"In the end, we will remember not the words of our enemies, but the silence of our friends.",
"You have power over your mind—not outside events. Realize this, and you will find strength.",
"If life were predictable it would cease to be life, and be without flavor.",
"He who has a why to live can bear almost any how.",
"What you get by achieving your goals is not as important as what you become by achieving your goals.",
"Keep your face always toward the sunshine, and shadows will fall behind you.",
"What we achieve inwardly will change outer reality.",
"Challenges are what make life interesting, overcoming them is what makes life meaningful.",
"Success is not the key to happiness. Happiness is the key to success.",
"The only place where success comes before work is in the dictionary.",
"Everything you’ve ever wanted is on the other side of fear.",
"Don’t count the days, make the days count.",
"Happiness depends upon ourselves.",
"If you want to lift yourself up, lift up someone else.",
"The best dreams happen when you’re awake.",
"Live each day as if your life had just begun.",
"Don’t quit. Suffer now and live the rest of your life as a champion.",
"The purpose of life is not to be happy. It is to be useful.",
"Learn as if you will live forever, live like you will die tomorrow.",
"Success seems to be connected with action. Successful people keep moving.",
"The man who has confidence in himself gains the confidence of others.",
"No one can make you feel inferior without your consent.",
"Success is not in what you have, but in who you are.",
"The harder the conflict, the greater the triumph.",
"Success is walking from failure to failure with no loss of enthusiasm.",
"Believe you can and you're halfway there.",
"You must be the change you wish to see in the world.",
"Opportunities don't happen, you create them.",
"The best way to get started is to quit talking and begin doing.",
"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
"It does not matter how slowly you go as long as you do not stop.",
"If opportunity doesn’t knock, build a door.",
"Great minds discuss ideas; average minds discuss events; small minds discuss people.",
"Failure will never overtake me if my determination to succeed is strong enough.",
"There are no shortcuts to any place worth going.",
"Keep going. Everything you need will come to you at the perfect time.",
"Success is the sum of small efforts, repeated day in and day out.",
"The only way to do great work is to love what you do.",
"Don’t watch the clock; do what it does. Keep going.",
"You miss 100% of the shots you don’t take.",
"The key to success is to start before you are ready.",
"The best way to gain self-confidence is to do what you are afraid to do.",
"The road to success and the road to failure are almost exactly the same.",
"You only live once, but if you do it right, once is enough.",
"No pressure, no diamonds.",
"Success usually comes to those who are too busy to be looking for it.",
"A big business starts small.",
"Success isn't just about what you accomplish in your life, it's about what you inspire others to do.",
"Do not be embarrassed by your failures, learn from them and start again.",
"You can either experience the pain of discipline or the pain of regret. The choice is yours.",
"Hard times don’t create heroes. It is during the hard times when the hero within us is revealed.",
"The secret to getting ahead is getting started.",
"Failure is another steppingstone to greatness.",
"A winner is a dreamer who never gives up.",
"Be so good they can't ignore you.",
"If you can dream it, you can do it.",
"Success comes from having dreams that are bigger than your fears.",
"The secret of success is to do the common thing uncommonly well.",
"I attribute my success to this: I never gave or took any excuse.",
"Don’t let the fear of losing be greater than the excitement of winning.",
"You have to learn the rules of the game. And then you have to play better than anyone else.",
"Success is not how high you have climbed, but how you make a positive difference to the world.",
"The question isn’t who is going to let me; it’s who is going to stop me.",
"Your time is limited, don’t waste it living someone else’s life.",
"Fall seven times and stand up eight.",
"If you really want to do something, you'll find ."
    
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerHTML = `<p>${quotes[randomIndex]}</p>`;
});

document.getElementById('btn-2').addEventListener('click', function(){
    
})
