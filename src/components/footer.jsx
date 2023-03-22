import React from "react"
export default function Footer(){
  return(
    <div className="footer">
      <div className="footer-title">
        <p>© 2023 Eventbrite</p>
      </div>
      <div className = "LinksLists">
        <ul>
          <a>How It Works</a> 
          <li>●</li>
          <a>Pricing</a> 
          <li>●</li>
          <a>Contact Support</a> 
          <li>●</li>
          <a>Contact Sales</a> 
          <li>●</li>
          <a>About</a>
          <li>●</li>
          <a>Blog</a> 
          <li>●</li>
          <a>Help</a> 
          <li>●</li>
          <a>Careers</a>
          <li>●</li>
          <a>Press</a> 
          <li>●</li>
          <a>Investors</a> 
          <li>●</li>
          <a>Security</a>
          <li>●</li>
          <a>Developers</a> 
          <li>●</li>
          <a>Terms</a>
          <li>●</li>
          <a>Privacy</a> 
          <li>●</li>
          <a>CA Privacy Notice</a> 
          <li>●</li>
          <a>Accessibilty</a> 
          <li>●</li>
          <a>Cookies</a>
        </ul>
      </div>
      <div>
      <select className="selectList" name="global-footer-select" role={"listbox"} id="global-footer-select" >
        <option value="es_AR" data-spec="select-option">Argentina</option>
        <option value="en_AU" data-spec="select-option">Australia</option>
        <option value="nl_BE" data-spec="select-option">België</option>
        <option value="fr_BE" data-spec="select-option">Belgique</option>
        <option value="pt_BR" data-spec="select-option">Brasil</option>
        <option value="en_CA" data-spec="select-option">Canada (EN)</option>
        <option value="fr_CA" data-spec="select-option">Canada (FR)</option>
        <option value="es_CL" data-spec="select-option">Chile</option>
        <option value="es_CO" data-spec="select-option">Colombia</option>
        <option value="en_DK" data-spec="select-option">Denmark</option>
        <option value="de_DE" data-spec="select-option">Deutschland</option>
        <option value="es_ES" data-spec="select-option">España</option>
        <option value="en_FI" data-spec="select-option">Finland</option>
        <option value="fr_FR" data-spec="select-option">France</option>
        <option value="en_HK" data-spec="select-option">Hong Kong</option>
        <option value="en_IE" data-spec="select-option">Ireland</option>
        <option value="it_IT" data-spec="select-option">Italia</option>
        <option value="es_MX" data-spec="select-option">México</option>
        <option value="nl_NL" data-spec="select-option">Nederland</option>
        <option value="en_NZ" data-spec="select-option">New Zealand</option>
        <option value="de_AT" data-spec="select-option">Österreich</option>
        <option value="es_PE" data-spec="select-option">Perú</option>
        <option value="pt_PT" data-spec="select-option">Portugal</option>
        <option value="de_CH" data-spec="select-option">Schweiz</option>
        <option value="en_SG" data-spec="select-option">Singapore</option>
        <option value="fr_CH" data-spec="select-option">Suisse</option>
        <option value="sv" data-spec="select-option">Sverige</option>
        <option value="en_GB" data-spec="select-option">United Kingdom</option>
        <option selected value="en_US" data-spec="select-option">United States</option>
      </select>
      </div>
    </div>
  )
}