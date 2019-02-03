
import React from 'react';
import {InnerBox, LandingTitle} from '../styled/forms'
import InsetList from '../components/calculationList'
  

const LandingPage =()=>
<div class="landing">
    <LandingTitle> 
        <InnerBox><blockquote>
        “Personal finance is only 20% head knowledge. It’s 80% behavior!” 
        </blockquote>–Dave Ramsey
        </InnerBox>
    </LandingTitle>

    <InsetList/>
</div>

export default LandingPage