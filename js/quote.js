var duration = 1000;
var delay = 0;
var no_of_images = 12;
var lang="en-US";

var quotes = ["We either win or we learn.","I attribute my success to this: I never gave or took any excuse. –Florence Nightingale","Every child is an artist.  The problem is how to remain an artist once he grows up. –Pablo Picasso","Take control of your emotions before emotions take control of you...","Mistakes are proof, that you are trying","Reality is a product of our dreams, decisions & actions.","Where words fail, music speaks.  Hans Christian Andersen","Your failure does not define you, your determination does.","Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me. Steve Jobs","What you do today can improve all your tomorrows.  Ralph Marston","It does not matter how slowly you go as long as you do not stop. Confucius","Judge of a man by his questions rather than by his answers. Voltaire",
              "God gave us the gift of life; it is up to us to give ourselves the gift of living well.  - Voltaire",
              "Appreciation is a wonderful thing: It makes what is excellent in others belong to us as well - Voltaire",
              "Common sense is not so common - Voltaire",
              "Tears are the silent language of grief. - Voltaire",
              "Music fills the infinite between two souls - Rabindranath Tagore",
              "By plucking her petals, you do not gather the beauty of the flower - Rabindranath Tagore",
              "Depth of friendship does not depend on length of acquaintance  - Rabindranath Tagore",
              "The world is the great gymnasium where we come to make ourselves strong - Swami Vivekananda",
              "When an idea exclusively occupies the mind, it is transformed into an actual physical or mental state - Swami Vivekananda","Though home is a name, a word, it is a strong one; stronger than magician ever spoke, or spirit answered to, in strongest conjuration. Charles Dickens","Dream big. Start small. But most of all, start.  Simon Sinek","Think big and don’t listen to people who tell you it can’t be done. Life’s too short to think small. Tim Ferris","Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. Albert Schweitzer","I have not failed. I've just found 10,000 ways that won't work. - Thomas Alva Edison","An essential aspect of creativity is not being afraid to fail. - Edwin Land","Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand. - Albert Einstein","Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Alva Edison","Every body prays in time of need, Prosperity kills prayer, Pray in prosperity - Kabir","Our life is a theatre and we are all actors in it pretending to be some one ,we are not really - St John","No blame, No complain, No excuse","Some will, Some will not, So what next","No pain, no gain","Age is just a number.","He who is of calm and happy nature will hardly feel the pressure of age, but to him who is of an opposite disposition youth and age are equally a burden. - Plato","A merry heart doeth good like a medicine, but a broken spirit drieth the bones. - Proverbs 17:22 Kings James Version.","If you concentrate on what you do not have you will never ever have enough","No Safety - Know Pain, Know Safety - No Pain","Communication, Urge, Leadership, Teamwork, Understanding, Recognition, Empowerment - CULTURE","If you can't do great things, do small things in a great way - Napoleon Hill","Comparing your progress to someone else is rarely helpful - Becker","We are not the things we own ","Excess adds stress and anxiety to our lives","The world has enough for everyone's need, but not enough for everyone's greed - Gandhi","Excess causes us to lose sight of the things we already have","I will tell you what I learned myself. For me a long, five or six-mile walk helps. And one must go alone and every day - Brenda Ueland","It is impossible to find peace, gratitude, and contentment while holding on to envy of those who have more. Unfortunately, we do it all the time. ","Admiration is a healthy emotion","What is the purpose of this life? Where can I have fulfillment? And what does it mean to live an abundant life? These are difficult questions with difficult answers. But surely, 'owning as much stuff as possible' is not the answer to any of them. There are greater pursuits available to us than excess. But they can be difficult to discover when all our energies are being directed at the wrong things.","Admire success. But do not praise excess. Our society is longing for people who can tell the difference.","Even in a hi-tech world you eyes are still your greatest asset","Safety comes in a can, I can, You can, We can be safe",
              "The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere they can be quiet, alone with the heavens, nature and God. Because only then does one feel that all is as it should be and that God wishes to see people happy, amidst the simple beauty of nature - Anne Frank","I never did a day's work in my life. It was all fun. - Thomas Alva Edison",
              "One can be instructed in society, one is inspired only in solitude - Johann Wolfgang Von Gothe",
              "Paradise is where I am - Voltaire",
              "One of the ultimate objectives of attaining inner simplicity is to learn to live happily in the present moment - Elaine St. James",
              "We do not remember days, we remember moments - Cesare Pavase",
              "The more I give myself permission to live in the moment and enjoy it without feeling guilty or judgemental about any other time, the better I feel about the quality of my work -Wayne Dyer",
              "Life is succession of moments. To live each one is to succeed - Cortia Kent",
              "The secret of genius is to carry the spirit of children into old age - Thomas Huxley",
              "Great is the man who has not lost his childlike heart - Mencius",
              "Joy is not in things; it is in us - Richard Wagner",
              "Where there is a will, there is a way -Anonymous",
              "The dead cannot cry out for justice, it is duty of the living to do so for them - Lois McMaster Bujold",
              "No one can make you feel inferior without your consent - Eleanor Roosevelt",
              "It is only possible to live happily ever after on a day to day basis - Margaret Bonnano",
              "Living in the moment means letting go of the past and not waiting for the future. It means living your life consciously, aware that each moment you breathe is a gift - Oprah Winfry",
              "If we had no faults, we should not take so much pleasure in noting those of others -Francois Duc de la Rochefoecauld",
              "The ultimate measure of man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy - Dr Martin Luther King Jr",
              "No matter how much pressure you feel at work, if you could find ways to relax for at least five minutes every hour, you'd be more productive - Joyce Brothers",
              "Tension is who you think you should be. Relaxation is who you are - Chinese Proverb",
              "The true perfection of man lies not in what man has, but in what man is - Oscar Wilde",
              "Time to relax is when you don't have time for it -Sydney J Harris",
              "Make no little plans; they have no magic to stir mem's blood .. Make big plans, aim high in hope and work - Daniel H. Burnham",
              "Thousands of candle can be lit from a single candle, and the life of the candle cannot be shortened. Happiness never decreases by being shared - Gautama Buddha",
              "The test of our progress is not whether we add more to the abundance of those who have much. It is whether we provide enough for those who have little - Franklin D Roosevelt",
              "I feel the greatest reward for doing is the opportunity to do more - Dr Jonas Edward Salk",
              "We are here to add what we can to life, not to get what we can from life - Sir Dr William Osler",
              "We all have it in us to take recovery into our own hands - Daivd Tan Chee Keong",
              "Someone please save me, and that someone is ME",
              "Let me not pray to be sheltered from dangers, but to be fearless in facing them, Let me not beg for the stilling of my pain, but for the heart to conquer it - Rabindranath Tagore",
              "The earth does not revolve around you, and the world will never change just for you, it is you who needs to change to adopt to this society.",
              "When the world shouts, 'Give Up' Hope whispers, 'Try it one more time'.",
              "Every cloud has a silver linning",
              "There are not great people in the world, only great challenges which ordinary people rise to meet - William Frederick Halsey, Jr",
              "Nothing is more powerful than one's own will ",
              "No matter how dark our own lives are, helping others brings light to them and us - Lawrence Pearsall Jacks",
              "When it is dark enough, you can see the stars - Charles A Beard",
              "We can do no great things - only small things with great love - Mother Teresa",
              "I llness, WE llness ",
              "Why do we fall? So that we might learn to pick ourselves up again - Bruce Wayne",
              "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off bowliness. Sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover - Mark Twain",
              "Opportunities multiplies as they are seized Sun Tzu",
              "The pessimist finds difficulty in every opportunity; the optimist find opportunity in every difficulty -Lawrence Pearsall Jacks",
              "You are, at this moment, standing, right in the middle of your own acres of diamonds - Earl Nightingale",
              "Many times a day I realize how much my own outer and inner life is built upon the labours of my fellowmen, and how earnestly I must exert myself in order to give in return as much as I have received - Albert Einstein",
              "Gratitude is a duty which ought to be paid, but which none have a right to expect- Jean-Jacques Rousseau",
              "To the generous mind the heaviest debt is that of gratitude, when it is not in our power to repay it- Benjamin Franklin",
              "He who receives a good turn should never forget it; he who does one should never remember it- Pierre Charron",
              "Love cannot remain by itself - it has no meaning. Love has to be put into action and that action is service. Whatever from we are, able or disabled, rich or poor, it is not how much we do, but how much love we put in the doing; a lifelong sharing of love with others- Mother Teresa",
              "Don't judge each day the harvest you reap, but the seeds that you plant- Robert Louis Stevenson",
              "You give but little when you give possessions. It is when you give of yourself that you truly give- Kahlil Gibran",
              "My goal is simple. It is a complete understandings of the Universe, why it is as it is and why it exists at all- Stephen William Hawking",
              "What this power is, I cannot say. All I know is that it exists, and it becomes available only when you are in that state of mind in which you know exactly what you want, and are fully determined not to quit until you get it- Alexander Graham Bell",
              "Nothing great in this world has ever been accomplished without passion- George Wilhelm Friedrich Hegel",
              "You can be anything you want to be, do anything you set out to accomplish if you hold to that desire with singleness of purpose- Abraham Lincoln",
              "Champions aren't made in the gyms. Champions are made from something they have deep inside them - a desire, a dream, a vision- Muhammad Ali",
              "Men often become what they believe in themselves to be. If I believe I cannot do something it makes me incapable of doing it. But when I believe I can, then I acquire the ability to do it, even if I didn't have it in the beginning- Mahatma Gandhi",
              "Discovery consists of looking at the same thing as everyone else does and thinking something different- Albert Szent-Gyorgi",
              "No problem can stand the assault of sustained thinking- Voltaire, Francois-Maire Arouet",
              "Minds are like parachutes; they only function when they are open- Sir James Dewar",
              "I think that everything is possible as long as you put your mind to it and you put the work and time into it. I think your mind really controls everything. You can't put a limit on anything. The more you dream, the farther you get- Michael Phelps",
              "To accomplish great things, we must not only act, but also dream, not only plan but also believe- Anatole France",
              "I like the dreams of the future better than the history of the past- Thomas Jefferson",
              "I dream my painting and then I paint my dream- Vincent Van Gaugh",
              "The only thing worse than being blind is having sight but no vision. Vision is non-negotiable for anyone who wants to succeed. It is the blueprint on the inside of a leader, before she ever sees the plan on the outside- Helen Keller",
              "If I have seen farther than others, it is because I was standing on the shoulders of giants- Sir Isaac Newton",
              "I never see what has been done. I only see what remains to be done- Marie Currie",
              "Future belongs to those who see possiblities before they become obvious- John Sculley",
              "Oneday Alice came to fork in the road and saw a Cheshire cat in a tree.'Which road do I take?' she asked. 'Where do you want to go?' was his response. 'I don't know' Alice answered.'Then' said the Cheshire cat 'it doesn't matter- Lewis Carroll",
              "Chance favours the prepared mind- Louis Pasteur",
              "If one does not know to which part one is sailing, no wind is favorable- Lucius Annaeus Seneca",
              "You cannot hit the target you cannot see, and you cannot see a target you do not have- Hilary Hinton",
              "It was a high counsel that I once heard given to a young person, 'Always do what you are afraid to do.'- Ralph Waldo Emerson",
              "Take calculated risks. That is quite different from being rash- George S. Patton",
              "Nothing contributes so much to tranquilize the mind as a steady purpose-- a point on which the soul may fix its intellectual eye- Mary Shelley",
              "Constant dripping hollows out a stone- Lucretiusy",
              "We are still masters of our fate. We are still captains of our souls- Winston Churchill",
              "Nothing great was ever achieved without enthusiasm- Ralph Waldo Emerson",
              "For hope is but the dream of those that wake- Matthew Prior",
              "Great spirits have always encountered violent opposition from mediocre minds- Albert Einstein",
              "Believe with all of your heart that you will do what you were made to do- Orison Swett Marden",
              "Knowing is not enough; we must apply.Willing is not enough; we must do- Johann Wolfgang von Goethe",
              "Storms make oaks take roots- Proverb",
              "If you do not hope, you will not find what is beyond your hopes- St. Clement of Alexandra",
              "We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate. The world is all gates, all opportunities- Ralph Waldo Emerson",
              "Seek the lofty by reading, hearing and seeing great work at some moment every day- Thornton Wilder",
              "The only way of finding the limits of the possible is by going beyond them into the impossible- Arthur C. Clarke",
              "Without inspiration the best powers of the mind remain dormant. There is a fuel in us which needs to be ignited with sparks- Johann Gottfried Von Herder",
              "And all may do what has by man been done- Edward Young",
              "We are what we repeatedly do. Excellence, therefore, is not an act but a habit- Aristotle",
              "Hope is like the sun, which, as we journey toward it, casts the shadow of our burden behind us- Samuel Smiles",
              "We can knowledgable with other men's knowledge but cannot be wise with other men's wisdom- Michel de Montaigne",
              "If you have an apple and I have an apple and we exchange these apples, then you and I will still each one have one apple. But if you have an idea and I have an idea and we exchange those ideas, then each of us will have two ideas- George Bernard Shaw",
              "I am always doing that which I cannot do, in order that I may learn how to do it- Pablo R Picasso",
              "Your most unhappy customers are your greatest source of learning- Bill Gates",
              "Every morning in Africa, a gazelle wakes up. It knows it must run faster than the fastest lion or it will be killed. Every morning, a lion wakes up. It knows it must outrun the slowest gazelle or it will starve to death. It doesn't matter whether you're a lion or a gazelle; when the sun comes up, you'd better be running- Herbert Eugene Caen",
              "You don't develop courage by being happy in your relationship everyday. You develop it by surviving difficult times and challenging diversity- Epicurus",
              "Do not go where the path may lead, go instead where there is no path and leave a trail- Ralph Waldo Emerson",
              "It doesn't matter whether a cat is black or white, so long as it catches mice- Deng Xiaoping",
              "Successful people aren't born that way. They became successful by establishing the habit of doing things unsuccessful people don't like to do. The successful people don't always like these things themselves; they just get on and do them- William Makepeace Thackeray",
              "Once you learn to quit, it becomes a habit- Vince Lambardi",
              "The chains of habit are generally too small to be felt until they are too strong to be broken- Samuel Johnson",
              "Each one of us will one day be judged by our standard of life, not by our standard of living; by our measure of giving, not by measure of our wealth; any by measure of our simple goodness, not by our seeming greatness- William Arthur Ward",
              "Work spares us from three evils: boredom, vice, and need- Voltaire",
              "If the wind will not serve,  take to the oars. Destitutus ventis, remos adhibe- Latin Proverb",
              "You cannot plough a field by turning it over in your mind- Anonymous",
              "The best way out is always through- Robert Frost",
              "We judge ourselves by what we feel capable of doing, while others judges us by what we have already done- Henry W Longfellow",
              "Our greatest glory is not in never falling, but in rising every time we fall- Confucius",
              "Being defeated is a temporary condition. Giving up is what makes it permanent- Marilyn vos Savant",
              "The strength of men's virtue should not be measured by his special exertions, but by his habitual acts- Blaise Pascal",
              "The supreme quality of leadership is unquestionably integrity. Without it, no real success is possible- Dwight D Eisenhower",
              "Living fearlessly is not the same thing as never being afraid. What's not good is living in fear, allowing fear to define you. Living fearlessly means standing up to fear, taking its measure, refusing to let it shape and define your life- Michael G Ignatieff",
              "The real prison is fear, and the only real freedom is freedom from fear- Aung San Suu Kyi",
              "Success is not final; failure is not fatal. It is the courage to continue that counts- Sir Winston Churchill",
              "You cannot discover new oceans unless you have the courage to lose sight of the shore- Philip Stanhope",
              "I am only one, but still I am one. I cannot do everything, but still I can do something; and because I cannot do everything, I will not refuse to do something I can do- Edward Everett Hale",
              "The man who can drive himself further once the effort gets painful is the man who will win- Sir Roger G Bannister",
              "I have more respect for the fellow with a single idea who gets there than for the fellow with a thousand ideas who does nothing- Thomas A Edison",
              "In all human affairs there are efforts, and there are results, and the strength of the effort is measure of the result- James Allen",
              "The strongest oak tree of the forest is not the one that is protected from the storm and hidden from the sun. It's the one that stands in the open where it is compelled to struggle for its existence against the winds and rains and the scorching sun- Dr Napolean Hill",
              "I fear not the man who has practiced 10,000 kicks once, but I fear the man who practiced one kick 10,000 times- Bruce Lee",
              "You can never quit. Winners never quit, and quitters never win- Ted Turner",
              "I saw the angel in the marble and carved until I set him free- Michaelangelo",
              "The great French Marshall Lyautey once asked his gardener to plant a tree. The gardener objected that the tree was slow growing and would not reach maturity for 100 years. The Marshall replied 'In that case, there is no time to lose; plant it this afternoon!'- John F Kennedy",
              "Time is the only coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lets you let other people spend it for you- Carl August Sandburg",
              "He who controls the present, controls the past. He who controls the past, controls the future- George Orwell",
              "Time is a companion that goes with us on a journey. It reminds us to cherish each moment, because it will never come again- Patrick Stewart",
              "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others. He does not set out to be a leader, but becomes one by the quality of his actions and the integrity of his intent- General Douglas MacArthur",
              "Lead by the example. Example is not the main thing in influencing others. It is the only thing- Albert Schweitzer",
              "Innovation distinguishes between a leader and a follower- Steve Jobs",
              "Nothing is more difficult, and therefore more precious, than to be able to decide- Napolean Bonaparte",
              "Teamwork is the ability to work together to a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results- Andrew Carnegie",
              "All business operations can be reduced to three words: people, products and profits. Unless you've a good team, you can't do much with other two- Lee lacocca",
              "The strength of the team is each individual member. The strength of each member is the team- Philip Douglas 'Phil' Jackson",
              "Coming together is beginning. Staying together is progress. Working together is success- Henry Ford",
              "Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back  and see you do it again; and they will want to bring others and show them how well you do what you do- Walt Disney",
              "Talent hits a target no one else can hit. Genius hits a target no one else can see- Arthur Schopenhauer",
              "Quality is never an accident, it is always the result of intelligent effort- John Ruskin",
              "If you do things well, do them better. Be daring, be first be different- Dame Anita Lucia Roddick",
              "Everybody has barriers and obstacles. If you look at them as containing fences that do n't allow you to advance, then you're going to be a failure. If you look at them as hurdles that strengthen you each time you go over one, then you're going to be success- Benjamin S Carson",
              "It is not the mountain we conquer but ourselves- Sir Edmund P Hillary",
              "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek- Barack Obama",
              "You will either step forward into growth or you will step back into safety- Dr Abraham Maslow",
              "When we are no longer able to change a situation, we are challenged to change ourselves- Viktor Frankl",
              "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered- Nelson Mandela",
              "Iron rusts from disuse, stagnant water loses its purity and in cold weather becomes frozen; even so does inaction sap the vigors of the mind- Leonardo da Vinci",
              "The journey of thousand miles begins with a single step- Lao Tzu",
              "To understand is hard. Once one understands, action is easy- Dr Sun Yat-Sen",
              "We do not choose to be born. We do not choose our parents. We do not choose the country of our birth. We do not, most of us, choose to die; nor do we choose the time and conditions of our death. But within all this realm of choicelessness, we do choose how we shall live- Joseph Epstein",
              "Life is sum of all your choices- Albert Camus",
              "Destiny is not a matter of chance, it is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved- William Jennings Bryan",
              "Freedom of choice is a universal principle to which there should be no exceptions- Mikhail S Gorbachev",
              "Speech is silver; silence is golden- Swiss Proverb",
              "True silence is the rest of the mind, and is to the spirit what sleep is to the body, nourishment and refreshment- William Penn",
              "In silence we find a new energy and a real unity. God's energy becomes ours, allowing us to perform things well- Mother Teresa",
              "The first virtue is to restrain the tongue; he approaches nearest to the gods who knows how to be silent- Cato The Younger",
              "Silent is true friend that never betrays- Confucius",
              "The great way is empty - like a vast sky. Silence the busy mind and know this perfection- Sosan",
              "The sky is clear and unaffected by what is happening. The clouds come and go, the winds come and go, so does the rain and sunlight, But the sky remains clear. Reckon the mind as a big clear sky and let everything arise and vanish on its own. Then the mind stay balanced, relaxed, observing the flow- anonymous",
              "Forget about the fast lane. If you really want to fly just harness your power to your passion. - Oprah Winfrey",
              "It's not about how to achieve your dreams. It's about how to lead your life. If you lead your life the right way, good karma will take care of itself. The dreams will come to you- Randy Pausch",
              "Success doesn't come to you. You go to it- Anonymous",
              "I've spent a long time chasing my dreams, but the one thing my dreams don't know, is that I never run out of breath- Laurence Anthony",
              "The deepest feeling always shows itself in silence- Marianne Moore",
              "Occasionally in life there are those moments of unutterable fulfillment which cannot be completely explained by those symbols called words. Their meanings can only be articulated by the inaudible language of the heart- Martin Luther King Jr",
              "A loving silence often has far more power to heal and to connect than the most well-intentioned words- Rachel Naomi Remen",
              "There is something greater and purer than what the mouth utters. Silence illuminates our souls, whispers to our hearts, and bridge them together. - Kahil Gibran",
              "In the attitude of silence one should find the path in a clearer light, and what is elusive and deceptive resolves itself into crystal clearness- Mahatma Gandhi",
              "God is the friend of silence. See how nature - trees, flowers grass - grows in silence; see the stars, the moon and the sun, how they move in silence .. we need silence to be able to touch souls- Mother Teresa",
              "Sitting quietly, doing nothing, spring comes, and the grass grows by itself- Zen Saying",
              "Soon silence will have passed into legend. Man has turned his back on silence. Day after day he invents machines and devices that increase noise and distract humanity from the essence of life, contemplation, meditation- Anonymous",
              "We in 'developed' world seem to have many auditory strategies that insulate us from the presence of silence, simplicity, and solitude. When I return to Western culture after time in desert, mountain or forest, I discover how we have filled our world with multiplicity of noises, a symphony of forgetfulness that keeps our own thoughts and realizations, feelings and intuitions out of audible range. - Joan Halifax",
              "Silence is more eloquent than words- Mother Teresa",
              "Why are we embarrassed by silence? What comfort do we find in all the noise? - Mitch Albom",
              "An inability to stay quiet is one of the most conspicuous failings of mankind- Walter Bagehot",
              "The more we elaborate our means of communication, the less we communicate- J B Prisely",
              "Perhaps it would be a good idea, fantastic as it sounds, to muffle every telephone, stop every motor and halt all activity for an hour some day to give people a chance to ponder for a few minutes on what it is all about, why they are living and what they really want- James Truslow Adams",
              "No one has a finer command of language than the person who keeps his mouth shut- Sam Rayburn",
              "A man is known by silence he keeps- Oliver Herford",
              "In Maine we have a saying there's no point in speaking unless you can improve on silence- Edmund Muskie",
              "It's amazing how much you hear when no one is speaking- Elaine St. James",
              "There are very few people who don't become more interesting when they stop talking- Mary Lowry",
              "I have never been hurt by anything I didn't say- Calvin Coolidge",
              "You don't always have to have something to say- Sammy Davis Jr.",
              "When you have nothing to say, say nothing- Charles Caleb Colton",
              "The value of average conversationi could be enormously improved by the constant use of four simple words: 'I don't know'- Andre Maurois",
              "It has been said: lot of things are opened by mistake, but none so often as the mouth- Gladys Case",
              "Stop talking and listen to what you really know- Robert Lawrence Smith",
              "Only in the oasis of the silence can we drink deeply from the inner cup of wisdom- Sue Patton Thoele",
              "A spiritual retreat is medicine for soul starvation. Through silence, solitary practice, and simply living, we begin to fill the empty reservoir. This lifts the veils, dissolves the masks, and creates space within for the feelings of forgiveness, compassion, and loving and kindness that are so often blocked- David A Cooper",
              "Silence fertilizes the deep place where personality grows. A life with a peaceful center can weather all storms- Norman Vincent Peale",
              "One's action ought to come out of an achieved stillness; not to be a mere rushing on- D. H. Lawrence",
              "Well-timed silence is the most commanding expression- Mark Helprin",
              "The silence is as important as the noise. What gets left out is as important as what gets included- Sara Lawrence-Lightfoot",
              "The notes I handle not better than many pianists. But the pauses between the notes - ah, that is where the art resides- Arthur Schinable",
              "Only in quiet waters do things mirror themselves undistorted. Only in a quiet mind is adequate perception of the world- Hans Margolius",
              "Men cannot see the reflection in running water, but only in still water- Chuang Tzu",
              "I have often thought it would be a blessing if each human being were stricken blind and deaf for a few days during his early adult life. Darkness would make him more appreciative of sight; silence would teach him the joys of sound- Helen Keller",
              "To experience reality, stop using words; for the more you talk about things, the farther away from the truth you stray- Sosan",
              "Learn to get in touch with silence within yourself and know that everything in this life has a purpose. There are no mistakes, no coincidences; all events are blessings given to us to learn from- Elisabeth Kubler-Ross",
              "Our language has wisely sensed the two sides of being alone. It has created the word 'loneliness' to express the pain of being alone. And it has created the word 'solitude' to express the glory of being alone- Paul Tillich",
              "Loneliness is the poverty of self, solitude is the richness of self- May Sarton",
              "Nothing will change the fact that I cannot produce the least thing without absolute solitude- Johann Wolfgang Von Goethe",
              "It would do the world good if every man in it would compel himself occasionally to be absolutely alone. Most of the world's progress has come out of such loneliness- Bruce Barton",
              "We need society, and we need solitude also, as we need summer and winter, day and night, exercise and rest- Philip Gilbert Hamerton",
              "We need quiet time to examine our lives openly and honestly ... spending quiet time gives your mind an opportunity to renew itself and create order- Susan L Taylor",
              "All differences in this world are of degree, and not of kind, because oneness is the secret of everything- Swami Vivekananda ",
              "Ah! There's nothing like staying home for real comfort- Jane Austen",
              " All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark- Swami Vivekananda",
              "You do not need to leave your room. Remain sitting at your table and listen. Do not even listen, simply wait. Do not even wait, be quiet and still and solitary. The world will freely offer itself to you to be unmasked, it has no choice, it will roll in ecstasy at your feet- Franz Kafka.",
              "As different streams having different sources all mingle their waters in the sea, so different tendencies, various though they appear, crooked or straight, all lead to God- Swami Vivekananda",
              "Happiness is a butterfly which, when pursued, is always beyond our grasp, but which, if you will sit down quietly, may alight upon you- Nathaneil Hawthorne",
              "Condemn none: if you can stretch out a helping hand, do so. If you cannot, fold your hands, bless your brothers, and let them go their own way. - Swami Vivekananda",
              "Sit in reverie, and watch the changing color of waves that break upon the idle seashore of the mind- Henry Wadsworth Longfellow",
              "External nature is only internal nature writ large- Swami Vivekananda",
              "Meditation is the soul's perspective glass- Owen Felltham",
              "GOD is to be worshipped as the one beloved, dearer than everything in this and next life- Swami Vivekananda",
              "Never be afraid to sit awhile and think- Lorraine Hansberry",
              "If faith in ourselves had been more extensively taught and practiced, I am sure a very large portion of the evils and miseries that we have would have vanished- Swami Vivekananda",
              "The great man is who, in the midst of the world, keeps with perfect sweetness the independence of solitude- Ralph Waldo Emerson",
              "If money help a man to do good to others, it is of some value; but if not, it is simply a mass of evil, and the sooner it is got rid of, the better- Swami Vivekananda",
              "The great man is who, in the midst of the world, keeps with perfect sweetness the independence of solitude- Ralph Waldo Emerson",
              "Never think there is anything impossible for the soul. It is the greatest heresy to think so. If there is sin, this is the only sin; to say that you are weak, or others are weak- Swami Vivekananda",
              "I never found companion that was so companionable as solitude- Henry David Thoreau",
              "Our duty is to encourage everyone in his struggle to live up to his own highest idea, and strive at the same time to make the ideal as near as possible to the Truth- Swami Vivekananda",
              "It the mind loves solitude, it has already acquired a loftier character, and it becomes nobler when the taste is indulged in- Wilhelm Von Humboldt",
              "Take up one idea. Make that one idea your life - think of it, dream of it, live on idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success. - Swami Vivekananda",
              "A master needs quiet. Calm and quiet are his most imperative needs. Isolation and complete loneliness are my only consolation, and my salvation- Richard Wagner",
              "That man has reached immortality who is disturbed by nothing material. - Swami Vivekananda",
              "There are voices we hear in solitude, but they grow faint and inaudible as we enter into the world- Ralph Waldo Emereson",
              "The moment I have realized God sitting in the temple of every human body, the moment I stand in reverence before every human being and see God in him - that moment I am free from bondage, everything that binds vanishes, and I am free. - Swami Vivekananda",
              "Great decisions in the realms of thought and momentous discoveries and solutions of problems are only possible to an individual working in solitude- Sigmund Freud",
              "The more we come out and do good to others, the more our hearts will be purified, and God will be in them. - Swami Vivekananda",
              "Great decisions in the realms of thought and momentous discoveries and solutions of problems are only possible to an individual working in solitude- Sigmund Freud",
              "The will is not free - it is a phenomenon bound by cause and effect - but there is something behind the will which is free. - Swami Vivekananda",
              "The best thinking has been done in solitude. The worst has been done in turmoil- Edward Gibbon",
              "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far. - Swami Vivekananda",
              "Whenever I hear someone speak of privacy, I find myself thinking once again how real and deep the need for such time is for all human beings...at all ages- Fred Rogers",
              "When an idea exclusively occupies the mind, it is transformed into an actual physical or mental state- Swami Vivekananda",
              "What a lovely surprise to finally discover how unlonely being alone can be- Ellen Burstyn",
              "You cannot believe in God until you believe in yourself- Swami Vivekananda",
              "Only when one is connected to one's own core is one connected to others. And, for me, the core, the inner spring, can best be refound through solitude- Anne Morrow Lindbergh",
              "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul- Swami Vivekananda",
              "We need quiet time to examine our lives openly and honestly... spending quiet time alone gives your mind an opportunity to renew itself and create order- Susan L Taylor",
              "Where can we go to find God if we cannot see Him in our own hearts and in every living being- Swami Vivekananda",
              "Age considers; youth ventures- Rabindranath Tagore",
              "I sat in my sunny doorway from sunrise till noon, rapt in reverie amidst the pines and hickories and sunmacs, in undistributed solitude and stillness, while the birds sing around of flitted noiseless through the house... I grew in those seasons like corn in the night- Henry David Thoreau",
              "Beauty is truth's smile when she beholds her own face in a perfect mirror- Rabindranath Tagore",
              "Solitude is a silent storm that breaks down all our dead branches; yet it sends our living roots deeper into the living heart of living earth- Kahlil Gibran",
              "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky- Rabindranath Tagore",
              "Solitude is the place of purification- Martin buber",
              "Death is not extinguishing the light; it is only putting out the lamp because the dawn has come- Rabindranath Tagore",
              "Like water which can clearly mirror the sky and trees only so long as its surface is undisturbed, the mind can only reflect the true image of the Self when it is tranquil and wholly relaxed- Indra Devi",
              "Depth of friendship does not depend on length of acquaintance- Rabindranath Tagore",
              "In the solitude of your mind are the answers to all your questions about life. You must take the time to ask and listen- Bawa Muhaiyadeen",
              "Do not say, 'It is morning,' and dismiss it with a name of yesterday. See it for the first time as a newborn child that has no name- Rabindranath Tagore",
              "Unlike achieving things worth having, to achieve things worth being usually requires long periods of solitude- Meyer Friedman and Ray Rosenman",
              "There is one art of which man should be master, the art of reflection- Samuel Taylor Coleridge",
              "Don't limit a child to your own learning, for he was born in another time- Rabindranath Tagore",
              "I love people. I love my family, my children... but inside myself is a place where I live all alone that's where you renew your springs that never dry up- Pearl S Buck",
              "It is in deep solitude that I find the gentleness with which I can truly love my brothers- Thomas Merton",
              "Every child comes with the message that God is not yet discouraged of man- Rabindranath Tagore",
              "You must have a room or a certain hour of the day or so where you do not know what was in the morning paper... a place where you can simply experience and bring forth what you are, and what you might be- Joseph Campbell",
              "Everything comes to us that belongs to us if we create the capacity to receive it- Rabindranath Tagore",
              "[Goring on retreat] has something to do with an aspect within each one of us... unknown to science... that longs to be at peace- David A Cooper",
              "Facts are many, but the truth is one- Rabindranath Tagore",
              "In solitude we give passionate attention to our lives, to our memories, to the details around us- Virgina Woolf",
              "Faith is the bird that feels the light when the dawn is still dark- Rabindranath Tagore",
              "When we cannot bear to be alone, it means we do not properly value the only companion we will have from birth to death - ourselves- Eda Leshan",
              "He who is too busy doing good finds no time to be good- Rabindranath Tagore",
              "When I dance, I dance, when I sleep, I sleep; yes, and when I walk alone in a beautiful orchard, if my thoughts drift to far-off matters for some part time, for some other part I lead them back again to the walk, the orchard, to the sweetness of this solitude, to myself- Michael De Montaigne",
              "I will tell you what I learned myself. For me a long, five or six-mile walk helps. And one must go alone and every day- Brenda Ueland",
              "All walk is discovery. On foot we take the time to see things whole- Hal Borland",
              "The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere they can be quiet, alone with the heavens, nature and God. Because only then does one feel that all is as it should be and that God wishes to see people happy, amidst the simple beauty of nature- Anne Frank",
              "One can be instructed in society, one is inspired only in solitude- Johann Wolfgang Von Gothe",
              "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only good for wallowing in- Katherine Mansfield",
              "It's only possible to live happily ever after on a day to day basis- Margret Bonnano",
              "Showing gratitude is one of the simplest yet most powerful things humans can do for each other- Randy Pausch, The Last Lecture",
              "Let your boat of life be light, packed with only what you need- Jerome K Jerome",
              "Take a quiet moment alone and try to find out what really makes you happy. Is your happiness derived mainly from outer circumstances? How much of it is due to your state of mind and the way you experience the world? If happiness comes from outer circumstances, check how stable or fragile they are. If it is due to a state of mind, consider how you can further cultivate it.",
              "When grace is joined with wrinkles, it is adorable. There is an unspeakable dawn in happy old age - Victor Hugo",
              "The secret of getting ahead is getting started - Mark Twain",
              "The human race has only one really effective weapon, and that is laughter. The moment it arises, all your irritations and resentments slip away and the sunny spirit takes their place - Mark Twain",
              "Initiative is doing the right thing without being told - Victor Hugo",
              "Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air - John Quincy Adams",
              "The best things in the life are not things - Derek Sivers",
              "The less I own, the happier I am - Derek Sivers",
              "The lack of possessions gives me the priceless freedom to live anywhere anytime - Derek Sivers",
              "People who say it cannot be done should not interrupt those who are doing it - Chinese Proverb.",
              "To achieve great things, two things are needed: a plan, and not quite enough time - Leonard Bernstein",
              "If you don't make mistakes, you aren't really trying - Coleman Hawkins",
              "Every noise, when listened to carefully, becomes music - Anushya Kumar" ,
              "Every artist dips his brush in his own soul, and paints his own nature into his pictures - Henry Ward Beecher" ,
              "Words have the power to destroy or heal. When they are both true and kind, they can change the world - Buddha",
              "Creativity requires the courage to let go of certainties - Erich Fromm",
              "We rely more on enthusiasm than actual skill. Whatever you do, do it enthusiastically and people will like it more - Chris Martin from Coldplay",
              "Creativity is making mistakes. Art is knowing which ones to keep - Scott Adams",
              "An amateur practices something until he gets it right. A professional practices until he can't get it wrong!",
              "The fruit takes a long time to ripen, but it falls suddenly - Proverb",
              "Don't let go of the old one until the new one is supporting you. And make sure you don't lose momentum - Derek Sivers",
              "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today - Malcolm X",
              "Thought is the labor of the intellect, reverie is its pleasure - Victor Hugo",
              "Even if you are on the right track, you'll get run over if you just sit there. - WILL ROGERS",
              "Listen to the problem, Problem will also listen to you.",
              "To learn language you need two things good ear and good memory.",
              "Hard work can give you anything you want - ",
              "People will forget what you said, people will forget what you did, but people will never forget how you made them feel -",
              "Listen to yourself and in that quietude you might hear the voice of God - Maya Angelou",
              "Love: A temporary insanity curable by marriage - Ambrose Bierce",
              "When you doubt your power, you give power to your doubt.",
              "Make time for yourself, you are important.",
              "Be yourself, to free yourself.",
              "I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer - Jim Carrey",
              "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
              "I have no special talents. I am only passionately curious. - Albert Einstein",
              "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions. - Chanakya",
              "Blessed are they who see beautiful things in humble places where other people see nothing ~ Camille Pissarro",
              "Character is like a tree and reputation its shadow. The shadow is what we think it is and the tree is the real thing. - Abraham Lincoln",
              "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
              "A smooth sea never made a skilled sailor.",
              "Unease, anxiety, tension, stress, worry - all forms of fear - are caused by too much future, and not enough presence - Eckhart Tolle",
              "If you can't explain it to a six year old, you don't understand it yourself. - Albert Einstein",
              "Logic will get you from A to Z; imagination will get you everywhere. - Albert Einstein","Opportunity is missed by most people because it is dressed in overalls and looks like work.- Thomas Alva Edison","All power is within you; you can do anything and everything. Believe in that, do not believe that you are weak; do not believe that you are half-crazy lunatics, as most of us do nowadays. You can do any thing and everything, without even the guidance of any one. Stand up and express the divinity within you.- Swami Vivekananda",
              "Unease, anxiety, tension, stress, worry - all forms of fear - are caused by too much future, and not enough presence Eckhart Tolle",
              "If you can't explain it to a six year old, you don't understand it yourself.  Albert Einstein",
              "Logic will get you from A to Z; imagination will get you everywhere.  Albert Einstein","Opportunity is missed by most people because it is dressed in overalls and looks like work. Thomas Alva Edison","A physician once said 'The best medicine for humans is love.' Someone asked ,'what if doesn't work?' He smiled and said 'Increase the dose'.","Until you value yourself, you won’t value your time. Until you value your time, you will not do anything with it. M. Scott Peck","It’s not about ideas. It’s about making ideas happen. Scott Belsky","All power is within you; you can do anything and everything. Believe in that, do not believe that you are weak; do not believe that you are half-crazy lunatics, as most of us do nowadays. You can do any thing and everything, without even the guidance of any one. Stand up and express the divinity within you. Swami Vivekananda",
              ];
var index = Math.floor(Math.random()*quotes.length);
var voice_on = 0;
$(document).ready(function(){
                  
                  $('*').css({'margin':'20px','padding':'5px'});
                  
                  $('h2').css({'background':'#E4DBDB'});
                  
                  $('buttonBar').css({'align':'center','background':'#E4DBDB'});
                  
                  // if browser does not support 'webkitSpeechRecognition', then remove 'speak' button.
                  if (window.hasOwnProperty('webkitSpeechRecognition')) {
                  
                  } else {
                  $( "#speak" ).remove();
                  }
                  
                  function speak(){
                  if (voice_on === 1 &&  window.hasOwnProperty('webkitSpeechRecognition')) {
                  var u = new SpeechSynthesisUtterance();
                  u.text = quotes[index];
                  u.lang = lang;
                  
                  if (lang === "en-US"){
                  lang = "en-GB";
                  if (index % 2 === 1){
                    u.name = "Google UK English Female";
                  console.log('Female UK voice');
                  } else {
                    u.name = "Google UK English Male";
                  console.log('Male UK voice');
                  }
                  } else {
                  lang = "en-US";
                  }
                  
                  u.onend = function () {
                  };
                  
                  u.onerror = function (e) {
                  
                  };
                  
                  speechSynthesis.speak(u);
                  }
                  }
                  function setDuration() {
                  delay =(( Math.round(quotes[index].length / 5) * duration) );
                  
                  }
                  
                  function setMedia(){
                  $('h2').text( quotes[index]);
                  var img_index = index % no_of_images;
                  $('#quote_image').attr('src','img/'+img_index+'.jpg');
                  speak();
                  }
                  
                  function incrementIndex(){
                  index++;
                  if (index >= quotes.length){
                  index = 0;
                  }
                  setDuration();
                  }
                  
                  function decrementIndex(){
                  if (index <= 0) {
                  index = quotes.length;
                  }
                  index--;
                  setDuration();
                  }
                  
                  setInterval(function(){
                              
                              if (delay === 0) {
                              incrementIndex();
                              setMedia();
                              $('#delay').text("Quotes will be updated in " +(delay / 1000) + " seconds");
                              } else {
                              $('#delay').text("Quotes will be updated in " +(delay / 1000) + " seconds");
                              delay -= duration;
                              }
                              
                              }, duration);
                  
                  // 'Previous' button click
                  $('#prevQuote').click(function(){
                                        decrementIndex();
                                        setMedia();
                                        });
                  
                  $('#1stQuote').click(function(){
                                       index = -1;
                                       incrementIndex();
                                       setMedia();
                                       });
                  
                  $('#nextQuote').click(function(){
                                        incrementIndex();
                                        setMedia();
                                        });
                  
                  $('#lastQuote').click(function(){
                                        index = quotes.length;
                                        decrementIndex();
                                        setMedia();
                                        
                                        });
                  
                  $('#speak').click(function(){
                                    if (voice_on === 0) {
                                    voice_on = 1;
                                    $("#speak").text('Turn voice off');
                                    speak();
                                    } else {
                                    voice_on = 0;
                                    $("#speak").text('Turn voice on');
                                    }
                                    
                                    
                                    });
                  });
