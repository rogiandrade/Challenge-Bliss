import { MainSearch } from "./mainSearch";
import { PreviewHeader } from "./previewHeader";

{/* this function returns all application styling */}
export function PreviewQuestion () {
    
    return(

        <section className="preview">
            
            <PreviewHeader />

            <MainSearch />

        </section>
    )
}