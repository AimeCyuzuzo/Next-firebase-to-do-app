


export default function Post({post}) {

    const {title, eventDate, paragraph, eventImage} = post.fields;

  return (
        <div className="col-xl-5 col-lg-5 col-sm-10 col-10">
          <div className="container-fluid w3-card w3-round p-2">
            <div className="row justify-content-center">
              <div className="col-10">
                <img src={
                  eventImage.fields.file.url
                }
                width="100%"
                />
              </div>
              <div className="col-8">
                <h3>
                  {title}
                </h3>
                <div>
                  <p>
                    {paragraph}
                  </p>
                  <small>
                    <i>
                      {eventDate}
                    </i>
                  </small>
                </div>
              </div>
            </div>
          </div>



                <style jsx>
                  {`

                    .w3-card{
                      box-shadow: 2px 2px 10px rgb(55, 55, 185);
                    }
                  `}
                </style>



        </div>
  )
}
