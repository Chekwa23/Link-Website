import React from 'react'
import {Container, Image} from 'react-bootstrap'
import {Link} from "react-router-dom";

import "./animationStyles.css"
import "./responsiveStyles.css"

export default function TermsOfServicePage() {
  return (
    <div>
      <Link className='linkStyle' to="/">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",  margin: "2vw 8vw 0 8vw"}}>
          <div style={{display: "flex", flexDirection: "row"}}>
            <Image src={require("./images/linkLogoWhite.svg").default} className='companyLogo'/>
            <div className='comanyNameDiv'>
              LINK
            </div>
          </div>
        </div>
      </Link>
      <Container className='mt-3' style={{color: "white"}}>
        <h1 style={{color: "#E69D37"}}>Terms and Conditions of Service</h1>

        <h2 style={{color: "#E69D37"}}>1. Terms</h2>

        <p>By accessing this Application, accessible from https://linkcd.org/ or theh mobile store, 
          you are agreeing to be bound by these App's Terms and Conditions of Use and agree that you are responsible for the agreement 
          with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. 
          The materials contained in this Website and Mobile App are protected by copyright and trade mark law.
        </p>

        <h2 style={{color: "#E69D37"}}>2. Use License</h2>

        <p>Permission is granted to temporarily download one copy of the materials on Link's Website and Mobile App for personal, non-commercial transitory viewing only. 
          This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>

        <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on Link's Website and Mobile App;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <p>This will let Link to terminate upon violations of any of these restrictions. 
          Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether 
          it is printed or electronic format. 
          These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.
        </p>

        <h2 style={{color: "#E69D37"}}>3. Disclaimer</h2>

        <p>All the materials on Link’s Website and Mobile App are provided "as is". Link makes no warranties, may it be expressed or implied, 
          therefore negates all other warranties. Furthermore, Link does not make any representations concerning the accuracy or reliability 
          of the use of the materials on its Website and Mobile App or otherwise relating to such materials or any sites linked to this Website and mobile app.</p>

        <h2 style={{color: "#E69D37"}}>4. Limitations</h2>

        <p>Link and its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Link’s Website and Mobile App, even ifand an authorize representative of this Website and Mobile App has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>
        <p>Link and its suppliers are not liable and will not be hold accountable for any security risk and damages or implications which arises from joining a group or participating inandn event found on the Link platform. We do not provide any form of security for groups and events created on the platform as this I the sole responsibility of the owner of the group (who ever created the group). Simply stated, you are joining a group at your own risk.</p>

        <h2 style={{color: "#E69D37"}}>5. Revisions and Errata</h2>

        <p>The materials appearing on Link’s Website and Mobile App may include technical, typographical, or photographic errors. Link will not promise that any of the materials in this Website and Mobile App are accurate, complete, or current. Link may change the materials contained on its Website and Mobile App at any time without notice. Link does not make any commitment to update the materials.</p>

        <h2 style={{color: "#E69D37"}}>6. Links</h2>

        <p>Link has not reviewed all of the sites linked to its Website and Mobile App and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Link of the site. The use of any linked website is at the user’s own risk.</p>

        <h2 style={{color: "#E69D37"}}>7. Terms of Use Modifications</h2>

        <p>Link may revise these Terms of Use for its Website and Mobile App at any time without prior notice. By using this Website and Mobile App, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

        <h2 style={{color: "#E69D37"}}>8. Your Privacy</h2>

        <p>Please read our Privacy Policy.</p>

        <h2 style={{color: "#E69D37"}}>9. Governing Law</h2>

        <p>Any claim related to Link's Website and Mobile App shall be governed by the laws of us without regards to its conflict of law provisions.</p>
      </Container>
    </div>
  )
}
