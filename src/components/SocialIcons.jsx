import React from "react";

const SocialIcons = () => {
    return (
        <div className="social">
                <div className="icons">
                    <ul className="social-icons">
                        <li className="icon icon--linkedin">
                            <a href="https://www.linkedin.com/in/yann-rezigui-59b79a1b0/">
                                <span className="icon__name">LinkedIn</span>
                            </a>
                        </li>
                        <li className="icon icon--instagram">
                            <a href="https://www.instagram.com/">
                                <span className="icon__name">Instagram</span>
                            </a>
                        </li>
                        <li className="icon icon--github">
                            <a href="https://github.com/YannRZG">
                                <span className="icon__name">GitHub</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default SocialIcons;