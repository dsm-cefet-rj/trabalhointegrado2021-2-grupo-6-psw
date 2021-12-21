import "./Sidebar.css";

function Sidebar() {
    <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
        <a href="/" class="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
         <img href="./assets/Logo1.png"></img>
          <span class="visually-hidden">Icon-only</span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
            <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal" viewBox="0 0 16 16">
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                  </svg>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
                </svg>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg>
            </a>
          </li>
        </ul>
        <div class="dropdown border-top">
          <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="24" height="24"></img>
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
}

export default Sidebar;