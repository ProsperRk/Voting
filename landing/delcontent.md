<section id="candidates">
        <div class="candidates-content">
            <div class="container">
                <div class="candidates-header">
                    <h1>The Candidates</h1>
                    <p>Meet the brave souls who stepped up to make a difference in our university's future. Choose wisely!</p>
                </div>

                <div class="candidates flex">
                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>

                    <div class="candidate">
                        <img src="./assets/images/candidates/candidate.jpg" alt="">
                        <h3>Jack Thomson</h3>
                        <p>Running for Guild President</p>

                        <div class="cta-btns">
                            <button type="button" class="btn">Profile</button>
                            <button type="button" class="btn">Vote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





    <section id="cta">
        <div class="slider">
            <div class="slide">
                <div class="container">

                </div>
            </div>
        </div>
    </section>




    /* CAndidates Section */

#candidates {
    padding: 30px 0;
}

.candidates-header {
    text-align: center;
}

.candidates-header h1 {
    position: relative;
    text-transform: uppercase;
    font-size: 2rem;
}

.candidates-header h1::before {
    content: "THE CANDIDATES";
    position: absolute;
    top: -20%;
    left: 40%;
    color: transparent;
    -webkit-text-stroke-color: #333 !important;
    letter-spacing: 2px;
    -webkit-text-stroke: 0.5px;
    z-index: 0;
    filter: blur(1px);
}

.candidates-header p {
    font-size: 1rem;
}

.candidates {
    padding-top: 30px;
    gap: 40px;
    flex-wrap: wrap;
}

.candidates .candidate {
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--white);
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.candidates .candidate img {
    width: 60px;
    border-radius: 50%;
}

.candidates .candidate p {
    padding-bottom: 10px;
}


.candidates .candidate .cta-btns {
    gap: 10px;
}

/* End of candidates */

/* CTA start */

#cta {
    height: 200px;
    width: 100%;
}

.slider {
    width: 100%;
    height: 100%;
}

.slider:first-child {
    background: url(../assets/images/cta.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.slide {
    position: relative;
}

.slide::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
} 

/* CTA End */