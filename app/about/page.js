import Navbar from '/app/component/nav';

export default function about() {
    return (
      <>
      <Navbar />
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/z.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Captain America: Civil War</h5>
                        <p class="card-text">ดำเนินเรื่องต่อจาก Avengers: Age of Ultron เมื่อกัปตันอเมริกาและทีมอเวนเจอร์สต้องเข้าไปจัดการกับเหตุการณ์ระหว่างประเทศซึ่งนำมาสู่ความเสียหายใหญ่หลวง ทำให้นักการเมืองพยายามที่จะออกกฎหมายลงทะเบียนเหล่าฮีโรเพื่อที่จะคอยควบคุมเหล่าอเวนเจอร์ส นำไปสู่การแตกแยกกันของเหล่าอเวนเจอร์ส ในขณะที่พวกเขากำลังพยายามปกป้องโลกใบนี้จากศัตรูตัวใหม่</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/c.png" class="custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Jumanji: The Next Level</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/x.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">Free Guy</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      </>
    );
  }
  