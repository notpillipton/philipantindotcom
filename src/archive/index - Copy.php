<?php
    $isMessageSent = ($_GET['success'] != 0);
    $isMessageSuccess = ($_GET['success'] > 0);
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Philip Antin is a capable software designer, an experienced educator, and a skilled analytic philosopher.">
        
        <link rel="stylesheet" type="text/css" href="/thirdparty/css/normalize.css">
        <link rel="stylesheet" type="text/css" href="/thirdparty/css/grid.css">
        <link rel="stylesheet" type="text/css" href="/thirdparty/css/animate.css">
        <link rel="stylesheet" type="text/css" href="/resources/css/style.css">
        <link rel="stylesheet" type="text/css" href="/resources/css/queries.css">
        <link href="https://fonts.googleapis.com/css?family=Philosopher%7CUbuntu" rel="stylesheet">
        <link href="https://unpkg.com/ionicons@4.2.4/dist/css/ionicons.min.css" rel="stylesheet">
        
        <title>Philip Antin</title>
        
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <link rel="stylesheet" type="text/css" href="thirdparty/css/jquery-eu-cookie-law-popup.css"/>
        <script src="thirdparty/js/jquery-eu-cookie-law-popup.js"></script>
        
        <link rel="apple-touch-icon" sizes="180x180" href="/resources/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/resources/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/resources/favicons/favicon-16x16.png">
        <link rel="manifest" href="/resources/favicons/site.webmanifest">
        <link rel="mask-icon" href="/resources/favicons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="/resources/favicons/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="/resources/favicons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        
    </head>
    <body class="eupopup eupopup-bottom">
        <header>
            <nav>
                <div class="row">
                    <img src="resources/img/headshot.jpg" alt="Antin headshot" class="logo">
                    <img src="resources/img/headshot.jpg" alt="Antin headshot" class="logo-small">
                    <ul class="main-nav">
                        <li><a href="#bio">About Philip</a></li>
                        <li><a href="#projects">Current Projects</a></li>
                        <li><a href="#updates">Recent Updates</a></li>
                        <li><a href="#contact">Contact Philip</a></li>
                    </ul>
                    <a class="mobile-nav-icon"><i class="ion-navicon-round"></i></a>
                </div>
            </nav>
            <div class="hero-text-box">
                <h1>Programmer. Professor. Philosopher.<br></h1>
                <h2>Applying pedagogy and critical thinking in software development.</h2><br>
                <a class="btn btn-full" href="#contact">Get this guy on the line!</a>
                <a class="btn btn-ghost" href="#bio">Show me more</a>
                <a class="btn btn-ghost" href="#projects">Let me play</a>
            </div>
        </header>
        
        <section class="section-bio js--section-bio" id="bio">
            <div class="row">
                <h3>Who Is Philip? What Can He Do?</h3>
                <p class="long-copy">
                    Philip is an innovative and multitalented professional who combines expertise in the humanities with experience as an educator in order to create intuitive software.
                </p>
            </div>
            
            <div class="row">
                <div class="col span-1-of-5 box">
                    <i class="ion-ios-code-working icon-big"></i>
                    <h4>30 years of coding</h4>
                    <p>
                        Philip picked up programming as a teenager and continued as a hobbyist throughout his adult life. Now he's channeling his diverse expertise through his coding skills in order to create useful tools.
                    </p>
                </div>
                <div class="col span-1-of-5 box">
                    <i class="ion-ios-school icon-big"></i>
                    <h4>13 years of teaching</h4>
                    <p>
                        Philip has more than a decade of experience as a college professor. He's equipped young adults with skills in critical thinking, logic, ethics, and philosophy. His students often return after graduation to thank him for his enthusiasm and effectiveness.
                    </p>
                </div>
                <div class="col span-1-of-5 box">
                    <i class="ion-ios-help-circle icon-big"></i>
                    <h4>Analytic philosophy and ethics</h4>
                    <p>
                        Philip's graduate studies in analytic philosophy emphasized critical thinking, conceptual clarity, and openness to critique, while his research in ethics explored the practical application of these skills.
                    </p>
                </div>
                <div class="col span-1-of-5 box">
                    <i class="ion-ios-compass icon-big"></i>
                    <h4>13 years of nonprofit leadership</h4>
                    <p>
                        In his work with various 501c(3) nonprofit organizations, Philip has equipped student leaders to mentor others, organized volunteer staff, and restructured training programs in order to further the missions of these nonprofits.
                    </p>
                </div>
                <div class="col span-1-of-5 box">
                    <i class="ion-ios-musical-notes icon-big"></i>
                    <h4>Fine arts</h4>
                    <p>
                        Programming might not give him much opportunity to sing opera, but Philip's study of music and art have refined his design sensibilities and given him an eye &mdash; and ear! &mdash; for presentation.
                    </p>
                </div>
            </div>
            
            <div class="row">
                <a class="btn btn-full" href="/resources/data/Antin%20Programming%20Resume%20-%202018-07.pdf" target="_blank">Download Philip's Resume</a>
            </div>
        </section>
        
        <section class="section-competencies">
            <ul class="competencies-showcase clearfix">
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp1-min.jpg" alt="Application development and programming" title="Application development and programming">
                        <figcaption>Application development and programming</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp2.jpg" alt="Analytic philosophy, emphasizing formal logic and critical thinking" title="Analytic philosophy, emphasizing formal logic and critical thinking">
                        <figcaption>Analytic philosophy, emphasizing formal logic and critical thinking</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp3-min.jpg" alt="Fine arts (vocal music and sculpture)" title="Fine arts (vocal music and sculpture)">
                        <figcaption>Fine arts (vocal music and sculpture)</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp4.jpg" alt="Teaching" title="Teaching">
                        <figcaption>Teaching</figcaption>
                    </figure>
                </li>
            </ul>
            <ul class="competencies-showcase clearfix">
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp5.jpg" alt="Project design" title="Project design and maintenance">
                        <figcaption>Project design and maintenance</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp6-min.jpg" alt="Public speaking" title="Public speaking and performance">
                        <figcaption>Public speaking and performance</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp7.jpg" alt="Research" title="Research">
                        <figcaption>Research</figcaption>
                    </figure>
                </li>
                <li>
                    <figure class="competencies-photo">
                        <img src="resources/img/comp8.jpg" alt="Release and update of applications" title="Release and update of applications">
                        <figcaption>Release and update of applications</figcaption>
                    </figure>
                </li>
            </ul>
        </section>
        
        
        <section class="section-projects" id="projects">
            <div class="row">
                <h3>Current Projects &mdash; Always Creating!</h3>
            </div>
            
            <div class="row">
                <div class="col span-1-of-3 projects-box">
                    <img src="resources/img/devices.gif" alt="Various screens for software development" class="app-screen">
                </div>
                <div class="col span-2-of-3 projects-box">
                    <div class="projects-item clearfix">
                        <div><a href="https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8"><img src="resources/img/ArithmeticDrill120.png" alt="Arithmetic Drill icon"></a></div>
                        <a href="https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8"><h4>Arithmetic Drill</h4></a>
                        <ul>
                            <li>Intuitive and customizable mathematics practice app</li>
                            <li>Technologies: <em>Swift (iOS)</em></li>
                            <li>Status: <em>Available now on Apple's App Store</em></li>
                        </ul>
                    </div>
                    <div class="projects-item clearfix">
                        <div><img src="resources/img/Twizzum%20Icon.svg" alt="Twizzum icon"></div>
                        <h4>Twizzum</h4>
                        <ul>
                            <li>Original strategy game of shifting alliances</li>
                            <li>Technologies: <em>HTML, CSS, PHP</em></li>
                            <li>Status: <em>In development</em></li>
                        </ul>
                    </div>
                    <div class="projects-item clearfix">
                        <div><img src="resources/img/XAttend%20Icon.png" alt="XAttend icon"></div>
                        <h4>XAttend</h4>
                        <ul>
                            <li>Cross-platform attendance management tool</li>
                            <li>Technologies: <em>C# (Xamarin), Java (Android), Swift (iOS), PHP, MySQL</em></li>
                            <li>Status: <em>In development</em></li>
                        </ul>
                    </div>
                    <div class="projects-item clearfix">
                        <div><img src="resources/img/PseudoTransparency%20Icon.svg" alt="PseudoTransparency icon"></div>
                        <h4>PseudoTransparency</h4>
                        <ul>
                            <li>Simple interface for retrieving color codes for simulated transparency</li>
                            <li>Technologies: <em>HTML, CSS, JavaScript</em></li>
                            <li>Status: <em>In development</em></li>
                        </ul>
                    </div>
                    
                    <!-- Activate these buttons once there's a developer entry on the Play Store, or once there's an additional app on the App Store.
                    <a href="#" class="btn-app"><img src="resources/img/download-app.svg" alt="App Store Button"></a>
                    <a href="#" class="btn-app"><img src="resources/img/download-app-android.png" alt="Play Store Button"></a>
                    -->
                </div>
            </div>
        </section>
        
        <section class="section-updates" id="updates">
            <div class="row">
                <h3>Here are the most recent updates</h3>
            </div>
            <div class="row">
                <div class="col span-1-of-4 box">
                    <img src="resources/img/headshot.jpg" alt="Philip Antin headshot" class="update-img">
                    <h4>PhilipAntin.com</h4>
                    <div class="update-feature">
                        <i class="ion-ios-time icon-small"></i>
                        2018-07-04
                    </div>
                    <div class="update-feature">
                        <i class="ion-ios-star icon-small"></i>
                        PhilipAntin.com goes live
                    </div>
                </div>
                <div class="col span-1-of-4 box">
                    <img src="resources/img/headshot.jpg" alt="Philip Antin headshot" class="update-img">
                    <h4>PhilipAntin.com</h4>
                    <div class="update-feature">
                        <i class="ion-ios-time icon-small"></i>
                        2018-06-29
                    </div>
                    <div class="update-feature">
                        <i class="ion-ios-star icon-small"></i>
                        Registration of PhilipAntin.com
                    </div>
                </div>
                <div class="col span-1-of-4 box">
                    <img src="resources/img/ArithmeticDrill120.png" alt="Apple App Store" class="update-img">
                    <h4>Arithmetic Drill</h4>
                    <div class="update-feature">
                        <i class="ion-ios-time icon-small"></i>
                        2018-06-22
                    </div>
                    <div class="update-feature">
                        <i class="ion-ios-star icon-small"></i>
                        Version 1.2
                    </div>
                    <div class="update-feature">
                        <i class="ion-logo-apple icon-small"></i>
                        Now available from the App Store!
                    </div>
                    <div class="update-feature update-link">
                        <a href="https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8"><img src="resources/img/AppleAppStore.png" alt="Download it now from the App Store"></a>
                    </div>
                </div>
                <div class="col span-1-of-4 box">
                    <img src="resources/img/ArithmeticDrill120.png" alt="Apple App Store" class="update-img">
                    <h4>Arithmetic Drill</h4>
                    <div class="update-feature">
                        <i class="ion-ios-time icon-small"></i>
                        2018-06-12
                    </div>
                    <div class="update-feature">
                        <i class="ion-ios-star icon-small"></i>
                        Version 1.1
                    </div>
                    <div class="update-feature">
                        <i class="ion-logo-apple icon-small"></i>
                        Now available from the App Store!
                    </div>
                    <div class="update-feature update-link">
                        <a href="https://itunes.apple.com/us/app/arithmetic-drill/id1393861540?mt=8"><img src="resources/img/AppleAppStore.png" alt="Download it now from the App Store"></a>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section-form" id="contact">
            <div class="row">
                <h3>Philip would love to hear from you!</h3>
            </div>
            <div class="row">
                <form method="post" action="mailer.php" class="contact-form" name="contact-form">
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="name">Name</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="Your name" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="email">Email</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="email" name="email" id="email" placeholder="Your email" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label for="find-us">How did you find this site?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <select name="find-us" id="find-us">
                                <option value="jobapp" selected>Job application or resume</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="search">Search engine</option>
                                <option value="friend">Personal recommendation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Follow-up requested?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="checkbox" name="followup" id="followup" checked> Yes, please
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Drop Philip a line</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="submit" value="Send it!" id="submit"><br>
                            <?php
                                if ($isMessageSent) {
                                    if ($isMessageSuccess) {
                                        echo "<p class=\"message-success\">Your message was sent! Thank you!</p>";
                                    } else {
                                        echo "<p class=\"message-failure\">Your message was not sent. Please check for errors and try again.</p>";
                                    }
                                } //Else show nothing here since no message has been sent.
                            ?>
                        </div>
                    </div>
                    
                </form>
                
            </div>
        </section>
        
        <footer>
            <div class="row">
                <div class="col span-1-of-2">
                    <ul class="footer-nav">
                        <li><a href="#bio">About Philip</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#updates">Updates</a></li>
                        <li><a href="#contact">Contact Philip</a></li>
                        <li><a href="https://itunes.apple.com/us/developer/philip-antin/id1393861539?mt=8">App Store</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <p>
                    Copyright &copy; 2018 by Philip Antin. All rights reserved.
                </p>
            </div>
        </footer>
        
        <script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/selectivizr@1.0.3/selectivizr.min.js"></script>
        <script src="thirdparty/js/jquery.waypoints.min.js"></script>
        <script src="resources/js/script.js"></script>
    
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <!--
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121889880-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-121889880-1');
            </script>
        -->
        <!– GA modified to comply with GDPR –>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121889880-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Don’t call the init functions just yet:
            // gtag(‘js’, new Date());
            // gtag(‘config’, ‘UA-121889880-1’);

            function initialiseGoogleAnalytics() {
                gtag(‘js’, new Date());
                gtag(‘config’, ‘UA-121889880-1’);
            }

            // Subscribe for the cookie consent events
            $(document).bind(“user_cookie_already_accepted”, function(event, object) {
                initialiseGoogleAnalytics();
            });

            $(document).bind(“user_cookie_consent_changed”, function(event, object) {
                const userConsentGiven = $(object).attr(‘consent’);
                if (userConsentGiven) {
                    // User clicked on enabling cookies. Now it’s safe to call the
                    // init functions.
                    initialiseGoogleAnalytics();
                }
            });
        </script>
    
    </body>  
    
</html>