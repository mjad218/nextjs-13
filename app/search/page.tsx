import SearchTemplates from "../../components/SearchTemplates";
import { getTemplates } from "../../services/template/getTemplates.service";

const getTemps = async () => {
  try {
    const templates = await getTemplates();
    return templates;
  } catch (e) {
    // console.error(e);
    return [];
  }
};
const SearchPage = async (props) => {
  const templates = await getTemps();
  return (
    <main>
      <SearchTemplates templates={templates} />
    </main>
  );
};

export default SearchPage;
