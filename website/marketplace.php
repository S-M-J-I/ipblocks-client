<?php $pageTitle = "Marketplace";
include "header.php" ?>
<div style="display: none;">
    <?php include "./components/balancebar.php" ?>
    <?php include "./components/accountsdropdown.php" ?>
</div>
<div class="container mx-auto">
    <h2 class="text-2xl font-bold mb-4">Marketplace</h2>

    <div id="marketplace" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

    </div>
    <h5 class="text-2xl font-bold mb-4" id="msg"></h5>
</div>

<div id="toast-container" class="fixed top-5 right-5 space-y-2 z-50"></div>
<?php include "footer.php" ?>

</html>