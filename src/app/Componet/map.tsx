function MapContact() {
    return(
        <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[600px] h-[400px] aspect-video rounded-2xl overflow-hidden shadow-lg border max-xl:w-[400px] max-lg:w-[300px] max-sm:w-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d811.9492318037012!2d45.12051038890336!3d40.688437258113986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sam!4v1748166627709!5m2!1sru!2sam"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
    )
}
export default MapContact