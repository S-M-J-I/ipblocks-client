<script src="./toast.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
<script src="./app.js"></script>
<script src="./styles.js"></script>
<?php
if ($pageTitle == "Marketplace") {
    echo "
        <script>window.onload = getAllAuctionIPs()</script>
        ";
}
?>
</body>
<footer>

</footer>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>