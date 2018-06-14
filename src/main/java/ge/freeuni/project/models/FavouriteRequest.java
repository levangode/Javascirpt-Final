package ge.freeuni.project.models;

public class FavouriteRequest {
    private Long uniId;
    private String userId;

    public FavouriteRequest() {
    }

    public FavouriteRequest(Long uniId, String userId) {
        this.uniId = uniId;
        this.userId = userId;
    }

    public Long getUniId() {
        return uniId;
    }

    public void setUniId(Long uniId) {
        this.uniId = uniId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
