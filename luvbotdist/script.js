document.addEventListener("DOMContentLoaded", function() {
    const luvbotWidget = document.createElement("div");
    luvbotWidget.id = "luvbot-widget";
    luvbotWidget.innerHTML = `
        <div id="luvbot-container">
            <div id="luvbot-avatar">
                <div id="luvbot-emoji">🤖</div>
                <div id="luvbot-hearts">
                    <div class="heart heart1">💜</div>
                    <div class="heart heart2">💜</div>
                </div>
            </div>
            <div id="luvbot-message">
                <p>Hi, I'm LuvBot! Nice to see you! 👋<br>
                I'm being upgraded right now, but if you need attachment-based dating tips or have any questions about SecureLuv™, you can reach my creator — Aaron D. Carter — directly!<br>
                
                👉 <a href="your-contact-link" target="_blank"> Talk to Aaron — Get Dating Advice</a></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(luvbotWidget);

    const style = document.createElement("style");
    style.innerHTML = `
        #luvbot-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 270px;
            background: #0a0015; /* Dark purple-near black */
            border-radius: 14px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            padding: 12px;
            font-family: Arial, sans-serif;
            color: #ffffff; /* White text */
            z-index: 9999;
            transition: transform 0.3s;
        }
        #luvbot-widget:hover {
            transform: scale(1.05);
        }
        #luvbot-avatar {
            text-align: center;
            position: relative;
        }
        #luvbot-emoji {
            font-size: 120px;
            animation: idleBounce 3s infinite ease-in-out;
            display: inline-block;
            transition: transform 0.3s;
        }
        #luvbot-emoji:hover {
            animation: wave 1s infinite;
        }
        @keyframes idleBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
        }
        #luvbot-hearts {
            position: absolute;
            top: 10px;
            right: -10px;
        }
        #luvbot-hearts .heart {
            position: absolute;
            opacity: 0;
            animation: floatHeart 6s infinite ease-in-out;
        }
        #luvbot-hearts .heart1 {
            font-size: 26px;
            right: 95px;
            top: 10px;
            animation-delay: 0s;
        }
        #luvbot-hearts .heart2 {
            font-size: 20px;
            right: 77px;
            top: 30px;
            animation-delay: 3s;
        }
        @keyframes floatHeart {
            0% { opacity: 0; transform: translateY(0px) scale(1); }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; transform: translateY(-100px) scale(1.4); }
        }
        #luvbot-message p {
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
            color: #ffffff; /* White text */
        }
        #luvbot-message a {
            font-size: 18px;
            color: #7D3C98; /* Keep that SecureLuv purple link color */
            font-weight: bold;
            text-decoration: none;
        }
    `;
    document.head.appendChild(style);
});